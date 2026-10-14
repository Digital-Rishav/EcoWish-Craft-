import { getBusinessLeads, getTrainingApplications, getContactMessages, getDatabaseStats } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Clock,
  ExternalLink,
  Phone,
  Mail,
  Download,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const stats = await getDatabaseStats();
  const businessLeads = await getBusinessLeads();
  const studentApps = await getTrainingApplications();
  const contactMsgs = await getContactMessages();

  return (
    <div className="py-10 bg-warm-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-ecowish-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-ecowish-secondary" />
              <span>Internal CRM & File-Based Storage</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary">
              EcoWish Lead & Application Records
            </h1>
            <p className="text-xs text-ecowish-charcoal-muted mt-1">
              Data source: Local atomic JSON persistence (`data/*.json`) + Real-time email dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-white border border-ecowish-border text-xs font-semibold text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
            >
              Back to Website
            </Link>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-ecowish-border shadow-xs">
            <div className="flex items-center justify-between text-xs text-ecowish-charcoal-muted mb-2">
              <span>Business Leads</span>
              <Briefcase className="w-4 h-4 text-ecowish-primary" />
            </div>
            <div className="text-2xl font-bold text-ecowish-primary font-mono">
              {stats.totalBusinessLeads}
            </div>
            <div className="text-[11px] text-emerald-700 font-semibold mt-1">
              {stats.newBusinessLeads} New Enquiries
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-ecowish-border shadow-xs">
            <div className="flex items-center justify-between text-xs text-ecowish-charcoal-muted mb-2">
              <span>Student Applications</span>
              <GraduationCap className="w-4 h-4 text-ecowish-secondary" />
            </div>
            <div className="text-2xl font-bold text-ecowish-primary font-mono">
              {stats.totalTrainingApplications}
            </div>
            <div className="text-[11px] text-emerald-700 font-semibold mt-1">
              {stats.newTrainingApplications} Awaiting Review
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-ecowish-border shadow-xs">
            <div className="flex items-center justify-between text-xs text-ecowish-charcoal-muted mb-2">
              <span>Contact Messages</span>
              <MessageSquare className="w-4 h-4 text-ecowish-accent-dark" />
            </div>
            <div className="text-2xl font-bold text-ecowish-primary font-mono">
              {stats.totalContactMessages}
            </div>
            <div className="text-[11px] text-ecowish-charcoal-muted mt-1">
              Direct Inquiries
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-ecowish-border shadow-xs">
            <div className="flex items-center justify-between text-xs text-ecowish-charcoal-muted mb-2">
              <span>Careers Applications</span>
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-ecowish-primary font-mono">
              {stats.totalCareerApplications}
            </div>
            <div className="text-[11px] text-ecowish-charcoal-muted mt-1">
              Candidate Submissions
            </div>
          </div>
        </div>

        {/* Section 1: Business Leads Table */}
        <div className="bg-white rounded-3xl border border-ecowish-border shadow-soft overflow-hidden mb-12">
          <div className="p-6 border-b border-ecowish-sand flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-xl font-bold text-ecowish-primary">
                Client & Business Leads ({businessLeads.length})
              </h2>
              <p className="text-xs text-ecowish-charcoal-muted mt-0.5">
                Saved from &ldquo;Request a Quote&rdquo; submissions
              </p>
            </div>
          </div>

          {businessLeads.length === 0 ? (
            <div className="p-12 text-center text-xs text-ecowish-charcoal-muted">
              No business leads received yet. Test by submitting the &ldquo;Request a Quote&rdquo; form on the website!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-ecowish-sand/50 text-ecowish-charcoal uppercase tracking-wider text-[10px] font-bold border-b border-ecowish-border">
                  <tr>
                    <th className="py-3.5 px-4">Ref ID / Date</th>
                    <th className="py-3.5 px-4">Client Name & Org</th>
                    <th className="py-3.5 px-4">Service & Project</th>
                    <th className="py-3.5 px-4">City / Contact</th>
                    <th className="py-3.5 px-4">Budget / Timeline</th>
                    <th className="py-3.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ecowish-sand">
                  {businessLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-ecowish-sand/30 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-medium text-ecowish-primary">
                        <div>{lead.id}</div>
                        <div className="text-[10px] text-ecowish-charcoal-muted font-sans mt-0.5">
                          {formatDate(lead.createdAt)}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-ecowish-charcoal">{lead.name}</div>
                        <div className="text-[11px] text-ecowish-charcoal-muted">
                          {lead.companyName || "Individual Client"}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-ecowish-primary">{lead.service}</div>
                        <div className="text-[11px] text-ecowish-charcoal-muted truncate max-w-xs">
                          {lead.projectType}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="text-ecowish-charcoal font-medium">{lead.city}</div>
                        <div className="text-[11px] text-ecowish-charcoal-muted flex items-center gap-2 mt-0.5">
                          <a href={`tel:${lead.phone}`} className="hover:underline text-ecowish-primary flex items-center gap-0.5">
                            <Phone className="w-3 h-3" />
                            <span>{lead.phone}</span>
                          </a>
                          <span>•</span>
                          <a href={`mailto:${lead.email}`} className="hover:underline">
                            <Mail className="w-3 h-3" />
                          </a>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div>{lead.estimatedBudget || "Unspecified"}</div>
                        <div className="text-[10px] text-ecowish-charcoal-muted">{lead.expectedTimeline}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Section 2: Student Training Applications */}
        <div className="bg-white rounded-3xl border border-ecowish-border shadow-soft overflow-hidden mb-12">
          <div className="p-6 border-b border-ecowish-sand flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-xl font-bold text-ecowish-primary">
                Student & Training Applications ({studentApps.length})
              </h2>
              <p className="text-xs text-ecowish-charcoal-muted mt-0.5">
                Saved from &ldquo;Apply for Training&rdquo; submissions
              </p>
            </div>
          </div>

          {studentApps.length === 0 ? (
            <div className="p-12 text-center text-xs text-ecowish-charcoal-muted">
              No training applications received yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-ecowish-sand/50 text-ecowish-charcoal uppercase tracking-wider text-[10px] font-bold border-b border-ecowish-border">
                  <tr>
                    <th className="py-3.5 px-4">App ID / Date</th>
                    <th className="py-3.5 px-4">Applicant Name</th>
                    <th className="py-3.5 px-4">Program & Category</th>
                    <th className="py-3.5 px-4">Exam Prep?</th>
                    <th className="py-3.5 px-4">City / Contact</th>
                    <th className="py-3.5 px-4">Mode / Education</th>
                    <th className="py-3.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ecowish-sand">
                  {studentApps.map((app) => (
                    <tr key={app.id} className="hover:bg-ecowish-sand/30 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-medium text-ecowish-primary">
                        <div>{app.id}</div>
                        <div className="text-[10px] text-ecowish-charcoal-muted font-sans mt-0.5">
                          {formatDate(app.createdAt)}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-ecowish-charcoal">{app.name}</div>
                        <div className="text-[11px] text-ecowish-charcoal-muted">{app.email}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-ecowish-primary">{app.course}</div>
                        <div className="text-[10px] text-ecowish-charcoal-muted">{app.trainingCategory}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        {app.isDesignExamPrep ? (
                          <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                            {app.targetExam || "Design Entrance"}
                          </span>
                        ) : (
                          <span className="text-[11px] text-ecowish-charcoal-muted">Standard</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4">
                        <div>{app.city}</div>
                        <div className="text-[11px] text-ecowish-primary font-mono">{app.phone}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div>{app.learningMode}</div>
                        <div className="text-[10px] text-ecowish-charcoal-muted">{app.education}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
