import { MuscleGroups } from "./MuscleGroups";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <MuscleGroups />
      </nav>
      {children}
    </section>
  );
}
