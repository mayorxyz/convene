// All mock data for the Convene site, typed.

export interface Integration {
  name: string;
  color: string;
  signals: string;
}

export const integrations: Integration[] = [
  { name: 'Slack', color: '#4A154B', signals: 'Threads, decisions, mentions, reactions' },
  { name: 'Google', color: '#4285F4', signals: 'Calendar events, drive docs, email threads' },
  { name: 'Docs', color: '#4285F4', signals: 'Specs, proposals, review comments' },
  { name: 'Sheets', color: '#0F9D58', signals: 'Tracking sheets, metrics tables' },
  { name: 'Meet', color: '#00897B', signals: 'Meeting summaries, action items' },
  { name: 'Zoom', color: '#2D8CFF', signals: 'Meeting summaries and action items' },
  { name: 'GitHub', color: '#8B949E', signals: 'PRs, releases, review lag, deploy events' },
  { name: 'Linear', color: '#5E6AD2', signals: 'Status, blockers, scope changes, cycles' },
  { name: 'Jira', color: '#0052CC', signals: 'Status, blockers, scope changes, sprints' },
  { name: 'Notion', color: '#8B949E', signals: 'Specs, roadmaps, meeting notes' },
  { name: 'Figma', color: '#F24E1E', signals: 'Design reviews, component changes' },
  { name: 'Salesforce', color: '#00A1E0', signals: 'Customer commitments, deal signals' },
  { name: 'Confluence', color: '#172B4D', signals: 'Specs and roadmaps, decision logs' },
  { name: 'Teams', color: '#6264A7', signals: 'Chats, meetings, channel threads' },
];

export interface Program {
  name: string;
  confidence: number;
}

export const detectedPrograms: Program[] = [
  { name: 'SOC 2 Type 2 Compliance', confidence: 94 },
  { name: 'Zero Desktop Agent', confidence: 87 },
  { name: 'Replace Migration', confidence: 91 },
  { name: 'Linear Integration', confidence: 96 },
  { name: 'Program Detection', confidence: 82 },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  { q: 'How long does setup take?', a: 'Most teams are live within 24 hours. Connect your tools, approve the detected programs, and Convene starts building shared state immediately. No migration, no data entry.' },
  { q: 'Does Convene write to my tools?', a: 'No. Convene is read-only by default. It ingests signals from your tools but never modifies them. You can optionally enable write actions per-agent with explicit approval.' },
  { q: 'What data is stored?', a: 'Convene stores program state: decisions, risks, owners, activity, and summaries. Raw message content is processed and discarded; only structured program signals are retained. All data is encrypted at rest.' },
  { q: 'Which models power Convene?', a: 'Convene uses a combination of frontier LLMs for reasoning and retrieval, with custom fine-tuned models for program-specific tasks. All processing happens in isolated tenants with no cross-customer data leakage.' },
  { q: 'Can I limit which channels are read?', a: 'Yes. You define scope per integration: specific Slack channels, Linear workspaces, GitHub repos, etc. Convene only sees what you explicitly allow.' },
  { q: 'How is access controlled?', a: 'Per-program, per-role access. You decide who sees what. Leadership, managers, and engineers each get tailored views. SSO/SAML and SCIM are supported.' },
  { q: 'Does it work with existing roadmaps?', a: 'Yes. Convene reads your roadmaps from Notion, Confluence, Linear, or any connected tool and keeps them aligned with live execution signals automatically.' },
  { q: 'How is pricing structured?', a: 'Per-seat pricing with volume discounts. Start with a free pilot on one program. Enterprise plans include SSO, audit logs, and dedicated support.' },
];

export interface ResourcePost {
  slug: string;
  category: 'Guides' | 'Playbooks' | 'Product' | 'Security' | 'Changelog';
  title: string;
  excerpt: string;
  readTime: number;
  date: string;
  author: string;
  content: string;
}

export const posts: ResourcePost[] = [
  {
    slug: 'tpm-guide-agent-augmented-programs',
    category: 'Guides',
    title: "The TPM's guide to running agent-augmented programs",
    excerpt: 'How technical program managers can delegate coordination work to AI agents while maintaining trust, visibility, and control over every program.',
    readTime: 12,
    date: '2026-10-15',
    author: 'Jake Morrison',
    content: `## The shift in program management

Technical program management has always been about coordination. You connect people, decisions, and timelines across teams. But the volume of coordination work has grown faster than any team can handle.

Agent-augmented programs change this. Instead of manually chasing updates, drafting status reports, and reconstructing context from scattered tools, you define the program once and let agents maintain it.

## What "agent-augmented" actually means

An agent-augmented program is one where AI agents continuously read signals from your tools, maintain shared state, and surface what matters. You still make the decisions. You still set the direction. But the coordination overhead drops dramatically.

Think of it as having a tireless program coordinator that never sleeps, never forgets, and never needs a status meeting.

## Setting up your first agent-augmented program

Start with one program. Pick something cross-functional with clear owners and visible risk. Connect the relevant tools: Slack for decisions, Linear for execution, GitHub for delivery.

Convene will detect the program, build a catalog entry, and start maintaining shared state. You review, refine, and approve what gets shared with whom.

## Trust and control

The biggest concern is trust. How do you know the agents are right? Convene addresses this with three mechanisms: citations (every claim links to source signals), reasoning traces (you can see why an agent concluded something), and human-in-the-loop controls (nothing is shared until you approve it).

## Scaling across programs

Once one program works, the pattern scales. Create reusable procedures: evidence collection for SOC 2, weekly digests for leadership, risk detection for platform migrations. Each procedure becomes a building block.

> "We went from 12 hours of coordination per week to 2. The agents handle the rest, and I handle the decisions."

## Measuring impact

Track three things: time saved on status work, speed of risk detection, and decision latency. Most teams see measurable improvement within the first week.

## What to watch for

Agent-augmented programs are not autonomous programs. You still need human judgment for strategy, prioritization, and stakeholder management. The agents handle the coordination; you handle the direction.

## Next steps

Start small. Pick one program. Connect three tools. See what Convene surfaces. Then expand. The future of program management is human-agent teams, and it starts with one program at a time.`
  },
  {
    slug: 'weekly-program-review-15-minutes',
    category: 'Playbooks',
    title: 'A weekly program review that takes 15 minutes',
    excerpt: 'Replace the hour-long status meeting with a structured 15-minute review powered by live program data and agent-generated summaries.',
    readTime: 8,
    date: '2026-10-12',
    author: 'Sarah Kim',
    content: `## The problem with status meetings

Weekly status meetings are where coordination goes to die. They are too long, too vague, and too focused on what happened rather than what needs to happen next.

Most of the information in a status meeting could be read asynchronously. The meeting should be for decisions, not updates.

## A better structure

A 15-minute program review has three parts:

1. **What changed** (3 min): Convene surfaces the key changes across your program since last review. Decisions made, risks raised, blockers resolved.
2. **What needs attention** (5 min): The agent highlights items requiring human judgment: unowned decisions, escalating risks, timeline slips.
3. **What happens next** (7 min): The team makes decisions, assigns owners, and sets deadlines. Convene logs everything automatically.

## Setting it up

Create a weekly trigger in Convene. Point it at your program. Choose the delivery channel: Slack, email, or a live session.

The agent prepares a digest before the meeting: changes, risks, open questions. You review it, adjust, and share with the team.

## During the meeting

Start with the digest. Skip anything that is on track. Focus on exceptions. Make decisions in the room. Convene captures them.

> "We cut our status meetings from 60 minutes to 15, and the decisions are better because we spend time on what actually matters."

## After the meeting

Convene updates the program state: decisions logged, owners assigned, deadlines set. The next digest will reflect these changes automatically.

## Scaling the pattern

Once the pattern works for one program, replicate it. Every program gets a weekly review. Every review is 15 minutes. The coordination overhead drops by 75%.

## Common pitfalls

Do not skip the "what needs attention" section. That is where the value is. Do not let the meeting become a status update. Keep it decision-focused. And do not forget to review the agent's reasoning: trust but verify.`
  },
  {
    slug: 'designing-shared-program-memory',
    category: 'Guides',
    title: 'Designing shared program memory',
    excerpt: 'How to structure program memory so decisions, risks, and context stay current without anyone writing status updates.',
    readTime: 10,
    date: '2026-10-08',
    author: 'Daniel Park',
    content: `## What is program memory?

Program memory is the shared, living record of a program: its decisions, risks, owners, history, and current state. Unlike a document or spreadsheet, it stays current automatically as work moves.

## Why documents fail

Documents go stale. The moment you write a status update, it begins to drift from reality. Within a week, no one trusts it. Within a month, it is abandoned.

Program memory solves this by being maintained by agents that continuously read signals from your tools and update the record.

## The structure of program memory

Every program in Convene has five components:

1. **Decisions**: What was decided, by whom, when, and why.
2. **Risks**: What could go wrong, likelihood, impact, and owner.
3. **Owners**: Who is responsible for what.
4. **History**: A timeline of significant events.
5. **State**: The current status of the program.

## How memory stays current

Agents read signals from Slack (decisions in threads), Linear (status changes), GitHub (delivery progress), and other tools. They extract structured information and update the program memory.

You do not write updates. The agents do. You review, approve, and refine.

## Access and permissions

Program memory is shared, but access is controlled. You decide who sees what. Leadership might see a summary. Managers see details. Engineers see their slice.

> "Program memory replaced our wiki, our status doc, and our risk register. One source of truth, always current."

## Querying memory

Once memory exists, you can query it. "What changed this week?" "Which decisions are unowned?" "What are the top risks?" Convene answers from the live state, with citations.

## Design principles

Keep it structured. Let agents maintain it. Give humans control. Share selectively. Query freely. That is the pattern.

## Getting started

Start with one program. Connect your tools. Let Convene build the initial memory. Review it. Adjust. Then expand to more programs. The memory compounds.`
  },
  {
    slug: 'introducing-prompt-based-triggers',
    category: 'Product',
    title: 'Introducing prompt-based triggers and widgets',
    excerpt: 'Define automations in plain English. Convene turns your prompts into scheduled triggers, live widgets, and reusable procedures.',
    readTime: 5,
    date: '2026-10-05',
    author: 'Product Team',
    content: `## What are prompt-based triggers?

Prompt-based triggers let you define automations in plain English. Instead of configuring complex workflows, you describe what you want: "Every Monday at 9am, send a digest of what changed this week to #leadership."

Convene turns that prompt into a scheduled trigger, a live widget, or a reusable procedure.

## How they work

You write a prompt. Convene interprets it, identifies the data sources, defines the schedule, and creates the automation. You review and approve.

The trigger runs on schedule. The output is delivered to your chosen channel: Slack, email, or a live dashboard widget.

## Examples

- "Every Friday, summarize the top risks across all active programs and post to #risk-review."
- "When a PR is open for more than 48 hours without review, notify the owner."
- "Generate a weekly rollup of all decisions made this week, grouped by program."

## Widgets vs triggers

Triggers run on schedule and deliver output. Widgets are live views that update in real time. Both are defined by prompts.

A widget might show "Active risks across all programs" and update as new risks are detected. A trigger might send a weekly summary.

## Reusable procedures

Once you define a prompt, you can save it as a procedure. Other programs can reuse it. "Weekly digest" becomes a building block.

> "We defined our entire reporting cadence in plain English. No code, no config files, just prompts."

## Getting started

Go to any program. Click "Create trigger." Write what you want. Review the plan. Approve. It runs.

## What is next

We are adding conditional logic, multi-step workflows, and agent-to-agent coordination. The vision: program automation as easy as writing a Slack message.`
  },
  {
    slug: 'how-convene-handles-access-audit-data',
    category: 'Security',
    title: 'How Convene handles access, audit, and data boundaries',
    excerpt: 'A deep dive into how Convene manages access control, maintains audit trails, and enforces data boundaries across tenants.',
    readTime: 9,
    date: '2026-10-01',
    author: 'Security Team',
    content: `## Overview

Security is not an afterthought at Convene. It is the foundation. Every design decision starts with the question: how do we ensure customers cannot see each other's data, and that access is always controlled?

## Access control

Convene uses a layered access model:

1. **Tenant isolation**: Each customer runs in an isolated tenant. No shared infrastructure at the data layer.
2. **Role-based access**: Within a tenant, access is controlled by role: admin, manager, engineer. Each role sees only what is permitted.
3. **Program-level permissions**: Within a program, you decide who sees what. Not all programs are visible to all roles.

## Audit trails

Every action in Convene is logged: who accessed what, when, and from where. Audit logs are immutable and retained for 7 years. They are available via the API and the admin console.

## Data boundaries

Convene enforces strict data boundaries:

- **Ingestion**: Read-only by default. Convene never writes to your tools unless explicitly configured.
- **Processing**: Data is processed in isolated environments. No cross-tenant processing.
- **Storage**: All data is encrypted at rest with customer-managed keys available on enterprise plans.
- **Transmission**: All data in transit is encrypted with TLS 1.3.

## SOC 2 compliance

Convene is SOC 2 Type 2 certified. The audit covers security, availability, and confidentiality. Reports are available to customers under NDA.

> "We evaluated six tools. Convene was the only one that met our security requirements out of the box."

## Data residency

Enterprise customers can choose data residency: US, EU, or APAC. Data never leaves the chosen region.

## Incident response

Convene maintains a 24/7 incident response team. Critical incidents are communicated within 1 hour. Post-incident reports are shared within 72 hours.

## Getting started

Review our security documentation. Request a security packet. Schedule a call with our security team. We are happy to walk you through every control.`
  },
  {
    slug: 'soc-2-readiness-without-spreadsheet',
    category: 'Playbooks',
    title: 'SOC 2 Type 2 readiness without the spreadsheet',
    excerpt: 'How to run SOC 2 evidence collection as a program with shared state, automated tracking, and zero manual spreadsheets.',
    readTime: 11,
    date: '2026-09-28',
    author: 'Priya Sharma',
    content: `## The SOC 2 problem

SOC 2 Type 2 readiness is a program. It has owners, risks, deadlines, and evidence. But most teams manage it with spreadsheets, email threads, and heroic last-minute sprints.

## Treating compliance as a program

When you treat SOC 2 as a program in Convene, everything changes. The program has shared state: what evidence is collected, what is missing, who owns what, and what the risks are.

Agents continuously read signals from your tools and update the program state. You see a live picture of readiness, not a stale spreadsheet.

## Setting up the program

1. Create a "SOC 2 Type 2" program in Convene.
2. Define the controls: access control, encryption, audit logs, etc.
3. Assign owners for each control.
4. Connect your tools: GitHub for code reviews, your IdP for access logs, your cloud provider for encryption evidence.

## Automated evidence collection

Convene agents collect evidence automatically. When a code review happens in GitHub, it is logged. When access is granted in your IdP, it is tracked. When encryption is verified, it is recorded.

You review the evidence, approve it, and the program state updates.

> "We cut our SOC 2 prep time by 60%. The agents handle the evidence collection; we handle the decisions."

## Tracking readiness

The program view shows readiness by control: green for complete, orange for in progress, red for missing. You see exactly where you stand.

## The audit

When the auditor arrives, you share the program view. They see live evidence, organized by control, with full audit trails. No scrambling. No last-minute sprints.

## Scaling to other frameworks

The same pattern works for ISO 27001, HIPAA, FedRAMP, and any compliance framework. Define the program, connect the tools, let agents collect evidence.

## Next steps

Start with one framework. Set up the program. Connect your tools. See what Convene surfaces. Then expand.`
  },
  {
    slug: 'migrating-off-manual-status-reports',
    category: 'Guides',
    title: 'Migrating off manual status reports',
    excerpt: 'A practical guide to replacing weekly status reports with live program state maintained by AI agents.',
    readTime: 7,
    date: '2026-09-25',
    author: 'Alex Chen',
    content: `## Why status reports fail

Status reports are a coordination tax. They take time to write, they go stale immediately, and no one reads them anyway. Yet teams keep writing them because there is no alternative.

Until now.

## The alternative: live program state

Instead of writing a status report, you maintain a program in Convene. Agents read signals from your tools and keep the state current. When someone asks "what is the status?", Convene answers from live data.

## Migration plan

**Week 1**: Pick one program. Connect the tools. Let Convene build the initial state. Review it.

**Week 2**: Run the program in parallel. Write the status report as usual, but also check Convene. Compare.

**Week 3**: Stop writing the report. Share the Convene program view instead. Collect feedback.

**Week 4**: Expand to more programs. Refine the pattern.

## Handling resistance

Some people will resist. "I need the report." "I do not trust the agents." Address these concerns directly: show citations, explain the reasoning, and demonstrate that the live state is more accurate than any report.

> "We stopped writing status reports three months ago. No one has asked for them since."

## What changes for stakeholders

Stakeholders get a live view instead of a weekly snapshot. They can query the program: "What changed this week?" "What are the risks?" "Who owns what?" The answers are always current.

## What changes for managers

Managers stop writing reports and start making decisions. The coordination overhead drops. The decision quality improves.

## Measuring success

Track time saved, report frequency, and stakeholder satisfaction. Most teams see measurable improvement within two weeks.

## Next steps

Start with one program. Run the migration. Expand. The future is live, not weekly.`
  },
  {
    slug: 'large-scale-temporal-reasoning',
    category: 'Product',
    title: 'Large-scale temporal reasoning: what changed and why',
    excerpt: 'How Convene reasons about changes across programs over time to surface what matters, when it matters.',
    readTime: 6,
    date: '2026-09-20',
    author: 'Product Team',
    content: `## The temporal reasoning problem

Engineering organizations generate thousands of signals per day: Slack messages, PR reviews, status changes, meeting notes. Most of them do not matter. The challenge is identifying what changed, why it changed, and where attention must go.

## How Convene reasons about time

Convene maintains a temporal model of every program. It knows what the state was yesterday, what it is today, and what changed between. It reasons about these changes to surface what matters.

## The reasoning pipeline

1. **Ingest**: Signals flow in from connected tools.
2. **Structure**: Agents extract structured information: decisions, risks, status changes.
3. **Compare**: The system compares current state to previous state.
4. **Reason**: Agents reason about the changes: is this a risk? a decision? a blocker?
5. **Surface**: What matters is surfaced to the right people at the right time.

## Examples

- A PR has been open for 48 hours without review. Convene flags it as a potential blocker.
- A decision was made in Slack but not reflected in Linear. Convene surfaces the inconsistency.
- A risk was raised last week but no action has been taken. Convene escalates it.

## Scale

Convene reasons across all programs simultaneously. It does not just track one program; it tracks every program and finds the patterns across them.

> "Convene sees things I would have missed. It connects the dots across programs and surfaces what actually matters."

## Customization

You can tune the reasoning: what counts as a risk, what requires escalation, what is noise. The system learns from your feedback.

## What is next

We are adding predictive reasoning: identifying risks before they materialize, suggesting interventions before blockers form. The future is proactive, not reactive.`
  },
  {
    slug: 'escalation-paths-without-heroics',
    category: 'Playbooks',
    title: 'Escalation paths that do not rely on heroics',
    excerpt: 'Design escalation paths that work automatically, with clear triggers, owners, and timeouts, powered by live program data.',
    readTime: 8,
    date: '2026-09-15',
    author: 'Morgan Lee',
    content: `## The heroics problem

Most escalation paths rely on heroes: someone notices a problem, someone decides to escalate, someone drops everything to fix it. This does not scale.

## Designing automatic escalation

An automatic escalation path has three components:

1. **Trigger**: What causes the escalation? A risk exceeds a threshold. A deadline is missed. A blocker is unresolved.
2. **Owner**: Who handles it? A specific person, a role, or a team.
3. **Timeout**: How long before it escalates further? If not resolved in 24 hours, it goes to the next level.

## Setting it up in Convene

Define the escalation path as a procedure. Specify the trigger, owner, and timeout. Convene monitors the program and executes the escalation automatically.

## Examples

- **Risk escalation**: If a risk is rated "high" and has no mitigation plan after 48 hours, notify the program lead.
- **Deadline escalation**: If a milestone is at risk and the owner has not updated the plan in 3 days, escalate to the manager.
- **Blocker escalation**: If a blocker is unresolved for 24 hours, notify the dependency owner and the program lead.

> "We used to rely on heroes to escalate. Now the system does it automatically. The heroes can focus on solving the problems."

## Monitoring escalation

Convene tracks every escalation: when it triggered, who was notified, how long it took to resolve. You can analyze patterns and improve the paths.

## Tuning the system

Start conservative: escalate early, notify broadly. Then tune based on data: which escalations were useful, which were noise? Adjust the triggers and timeouts.

## Scaling across programs

Once the pattern works for one program, replicate it. Every program gets escalation paths. Every path is automatic. The heroics stop.

## Next steps

Pick one escalation path. Define it in Convene. Monitor it. Tune it. Then expand. The future of escalation is automatic, not heroic.`
  },
];

export interface ChangelogEntry {
  date: string;
  version: string;
  summary: string;
}

export const changelog: ChangelogEntry[] = [
  { date: '2026-10-18', version: 'v2.4.0', summary: 'Prompt-based triggers now support conditional logic and multi-step workflows.' },
  { date: '2026-10-10', version: 'v2.3.0', summary: 'New: Program analytics dashboard with temporal reasoning and trend detection.' },
  { date: '2026-09-28', version: 'v2.2.0', summary: 'Added Salesforce integration for customer commitment tracking.' },
  { date: '2026-09-15', version: 'v2.1.0', summary: 'Collaborative controls: toggle agents on/off per program with one click.' },
  { date: '2026-09-01', version: 'v2.0.0', summary: 'Major release: shared program memory, agent catalog, and permissions overhaul.' },
  { date: '2026-08-15', version: 'v1.9.0', summary: 'Zoom integration for meeting summaries and action item extraction.' },
];

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossary: GlossaryTerm[] = [
  { term: 'Program', definition: 'A cross-functional body of work with shared goals, owners, risks, and timelines.' },
  { term: 'Program memory', definition: 'The shared, living record of a program: decisions, risks, owners, history, and current state.' },
  { term: 'Loop', definition: 'A recurring automation that reads signals, updates state, and delivers output on a schedule.' },
  { term: 'Trigger', definition: 'An event or condition that starts an automation: a risk threshold, a deadline, a blocker.' },
  { term: 'Control plane', definition: 'The shared system that keeps humans and agents aligned on program state and direction.' },
  { term: 'Drift', definition: 'When program state diverges from reality: stale docs, outdated roadmaps, untracked decisions.' },
  { term: 'Agent', definition: 'An AI system that reads signals, maintains state, and performs coordination tasks within a program.' },
  { term: 'Digest', definition: 'A scheduled summary of what changed in a program, delivered to a channel or inbox.' },
];

export interface TimelineStop {
  time: string;
  label: string;
}

export const dayWithConvene: TimelineStop[] = [
  { time: '7:30', label: 'Weekly digest delivered to Slack #leadership' },
  { time: '9:00', label: 'Standup skipped — Convene has the update' },
  { time: '11:15', label: 'Risk flagged on Replace Migration, owner notified' },
  { time: '14:00', label: 'Decision logged from Slack thread, program updated' },
  { time: '16:30', label: 'Stakeholder update drafted and reviewed' },
  { time: '18:00', label: 'Weekly rollup auto-generated and shared' },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  { quote: 'Convene replaced three tools and four meetings. Our programs have never been more aligned.', name: 'Alex Rivera', role: 'VP Engineering', company: 'Sample Corp' },
  { quote: 'The agents handle the coordination. I handle the decisions. That is the right division of labor.', name: 'Jordan Park', role: 'Director of PM', company: 'Acme Inc' },
  { quote: 'We went from weekly status reports to live program state. The drift is gone.', name: 'Casey Nguyen', role: 'TPM Lead', company: 'Demo Systems' },
];

export interface RoleDetail {
  slug: string;
  abbr: string;
  label: string;
  headline: string;
  weekPlan: { day: string; moment: string }[];
  prompts: { q: string; a: string }[];
  outcomes: { value: string; label: string }[];
}

export const roleDetails: RoleDetail[] = [
  {
    slug: 'em',
    abbr: 'EM',
    label: 'ENGINEERING MANAGER',
    headline: 'Understand the reality without chasing updates.',
    weekPlan: [
      { day: 'Mon', moment: 'Digest of team velocity and blockers' },
      { day: 'Tue', moment: 'Risk flagged on overloaded sprint' },
      { day: 'Wed', moment: '1:1 prep auto-generated from recent work' },
      { day: 'Thu', moment: 'Cross-team dependency surfaced' },
      { day: 'Fri', moment: 'Weekly rollup shared with leadership' },
    ],
    prompts: [
      { q: 'Where is delivery slipping this sprint?', a: 'Three items in the Platform team are behind schedule: the auth migration (3 days late), the caching layer (blocked on design review), and the monitoring dashboard (owner out sick). Recommend reallocating one engineer from the low-priority docs sprint.' },
      { q: 'Which teams look overloaded?', a: 'Platform team is at 134% capacity this sprint. Infrastructure is at 98%. The Frontend team has bandwidth — consider shifting the docs sprint items to them.' },
      { q: 'Draft my 1:1 prep for Priya', a: 'Priya shipped 4 PRs this week, including the critical auth fix. She raised a concern about the caching design in #eng-platform. Open question: she has not taken PTO in 3 months. Suggested topics: celebrate the auth fix, discuss caching design, check in on workload.' },
    ],
    outcomes: [
      { value: '6 hrs', label: 'Coordination time returned per week' },
      { value: '2.3x', label: 'Faster blocker detection' },
      { value: '89%', label: 'Team health visibility' },
    ],
  },
  {
    slug: 'pm',
    abbr: 'PM',
    label: 'PRODUCT MANAGER',
    headline: 'Keep decisions, timelines, and execution aligned.',
    weekPlan: [
      { day: 'Mon', moment: 'Scope changes since last roadmap review' },
      { day: 'Tue', moment: 'Unowned decision flagged in pricing thread' },
      { day: 'Wed', moment: 'Customer feedback signal from Salesforce' },
      { day: 'Thu', moment: 'Launch readiness checklist auto-updated' },
      { day: 'Fri', moment: 'Launch update drafted and reviewed' },
    ],
    prompts: [
      { q: 'What changed in scope since the roadmap review?', a: 'Two changes: the search redesign was descoped (decision logged in #product on Oct 12), and the API v3 was added (requested by Acme Corp, committed in Salesforce on Oct 14). Net impact: +1 week to the Q4 timeline.' },
      { q: 'Which decisions are unowned?', a: 'Three decisions are unowned: the pricing tier structure (raised by Sales, no PM owner), the mobile vs web priority for the new onboarding flow (raised by Design), and the data retention policy (raised by Legal). Recommend assigning owners in the next product sync.' },
      { q: 'Draft the launch update', a: 'Draft ready. Key points: launch is on track for Nov 15, two risks remain (API v3 integration and the pricing decision), all other workstreams are green. Suggested distribution: Slack #all-hands, email to stakeholders, Notion update to the roadmap.' },
    ],
    outcomes: [
      { value: '42%', label: 'Fewer scope surprises' },
      { value: '3.1x', label: 'Faster decision tracking' },
      { value: '100%', label: 'Roadmap-execution alignment' },
    ],
  },
  {
    slug: 'tpm',
    abbr: 'TPM',
    label: 'TECHNICAL PROGRAM MANAGER',
    headline: 'Delegate coordination. Scale your impact.',
    weekPlan: [
      { day: 'Mon', moment: 'Cross-program dependency map updated' },
      { day: 'Tue', moment: 'SOC 2 evidence collection automated' },
      { day: 'Wed', moment: 'Migration risk escalated automatically' },
      { day: 'Thu', moment: 'Reusable procedure created for evidence' },
      { day: 'Fri', moment: 'Program report generated and shared' },
    ],
    prompts: [
      { q: 'Which dependencies are blocking Replace Migration?', a: 'Two dependencies: the legacy database schema change (owned by Data team, due Oct 25) and the security review (owned by InfoSec, in progress). The schema change is at risk — no update in 5 days. Recommend escalating to the Data team lead.' },
      { q: 'Generate the weekly program report', a: 'Report ready. Summary: 5 active programs, 3 on track, 1 at risk (Replace Migration), 1 blocked (Federal ID). Key decisions: 4 made this week. Top risks: schema change delay, InfoSec review timeline. Full report attached.' },
      { q: 'Create a reusable procedure for SOC 2 evidence collection', a: 'Procedure created: "SOC 2 Evidence Collection." Steps: 1) Connect GitHub, IdP, and cloud provider. 2) Define controls. 3) Assign owners. 4) Set collection schedule (daily). 5) Review and approve evidence weekly. Available for all programs to reuse.' },
    ],
    outcomes: [
      { value: '10x', label: 'Programs managed per TPM' },
      { value: '75%', label: 'Less time on status work' },
      { value: '4.2x', label: 'Faster risk detection' },
    ],
  },
  {
    slug: 'leadership',
    abbr: 'Leadership',
    label: 'ENGINEERING AND EXECUTIVE',
    headline: 'Gain unprecedented program visibility.',
    weekPlan: [
      { day: 'Mon', moment: 'Executive digest: momentum and risks' },
      { day: 'Tue', moment: 'Quarterly risk heatmap updated' },
      { day: 'Wed', moment: 'Decision backlog surfaced for review' },
      { day: 'Thu', moment: 'Cross-org dependency alert' },
      { day: 'Fri', moment: 'Board-ready program summary generated' },
    ],
    prompts: [
      { q: 'Which programs are at risk this quarter?', a: 'Two programs are at risk: Replace Migration (schema change delay, 2 weeks behind) and the Zero Desktop Agent rollout (adoption below target, 60% vs 80% goal). Three programs are on track. One is blocked (Federal ID). Recommend a focused review on Replace Migration.' },
      { q: 'Summarize momentum across engineering', a: 'Overall momentum is positive. Velocity is up 12% quarter-over-quarter. Delivery predictability is at 78%. Top concern: coordination overhead is still high in the Platform team. Recommendation: invest in program coordination tooling (like Convene) for the Platform team.' },
      { q: 'What do I need to decide this week?', a: 'Three decisions need your input: 1) Approve the Q1 budget allocation for the infrastructure migration ($2.4M). 2) Decide on the mobile vs web priority for the new onboarding flow. 3) Approve the hiring plan for the Platform team (3 engineers, 1 TPM). All context is available in the linked programs.' },
    ],
    outcomes: [
      { value: '3.8x', label: 'Faster decision-making' },
      { value: '92%', label: 'Program visibility score' },
      { value: '67%', label: 'Fewer surprise escalations' },
    ],
  },
];

export interface ComparisonRow {
  label: string;
  meetings: string;
  spreadsheets: string;
  chat: string;
  convene: string;
}

export const comparisonRows: ComparisonRow[] = [
  { label: 'Always up to date', meetings: '—', spreadsheets: '—', chat: '—', convene: '✓' },
  { label: 'Cross-tool context', meetings: '—', spreadsheets: '—', chat: 'Partial', convene: '✓' },
  { label: 'Remembers decisions', meetings: '—', spreadsheets: '—', chat: '—', convene: '✓' },
  { label: 'Tracks risks automatically', meetings: '—', spreadsheets: '—', chat: '—', convene: '✓' },
  { label: 'Works on existing tools', meetings: '✓', spreadsheets: '✓', chat: '✓', convene: '✓' },
  { label: 'Setup time', meetings: 'Weekly', spreadsheets: 'Manual', chat: 'Per prompt', convene: 'Day one' },
];

export interface SecurityControl {
  title: string;
  description: string;
}

export const securityControls: SecurityControl[] = [
  { title: 'Encryption in transit and at rest', description: 'All data encrypted with TLS 1.3 in transit and AES-256 at rest. Customer-managed keys available.' },
  { title: 'SSO / SAML', description: 'Enterprise SSO with SAML 2.0 and OIDC. Integrate with Okta, Azure AD, Google Workspace, and more.' },
  { title: 'SCIM provisioning', description: 'Automated user provisioning and deprovisioning via SCIM 2.0. Sync with your identity provider.' },
  { title: 'Role-based access', description: 'Granular RBAC with custom roles. Control who sees what at the tenant, program, and field level.' },
  { title: 'Audit logs', description: 'Immutable audit logs for every action. Retained 7 years. Available via API and admin console.' },
  { title: 'Data retention controls', description: 'Configure retention policies per data type. Automated deletion with certification. Meet your compliance requirements.' },
  { title: 'Read-only integrations', description: 'All integrations are read-only by default. Convene never writes to your tools unless explicitly configured.' },
  { title: 'Tenant isolation', description: 'Each customer runs in an isolated tenant. No shared infrastructure at the data layer. Zero cross-tenant access.' },
  { title: 'Vendor risk reviews', description: 'Annual third-party security assessments. SOC 2 Type 2 certified. Reports available under NDA.' },
];
