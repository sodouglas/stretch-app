import { MuscleGroups } from "./MuscleGroups";

export const Sidebar = () => {
  return (
    <div>
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
          <MuscleGroups />
        </nav>
      </section>
    </div>
  );
};
