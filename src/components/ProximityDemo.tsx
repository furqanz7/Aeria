import ProductScene from "./ProductScene";

const principles = [
  { label: "Discover", title: "Find the person.", copy: "Discover an intended recipient nearby on supported devices." },
  { label: "Review", title: "Make it personal.", copy: "Check their identity and the amount before you continue." },
  { label: "Authorize", title: "Keep it intentional.", copy: "Your explicit authorization comes before any payment." },
];

export default function ProximityDemo() {
  return (
    <div className="proximity-cinematic">
      <div className="proximity-narrative">
        <span className="proximity-explore-label">A CONNECTION, STEP BY STEP</span>
        <ol className="proximity-story-steps" aria-label="Concept steps">
          {principles.map((step, i) => <li key={step.label}>
            <span className="proximity-step-number">0{i + 1}</span>
            <div><span className="proximity-step-label">{step.label}</span><h3>{step.title}</h3><p>{step.copy}</p></div>
          </li>)}
        </ol>
      </div>
      <div className="proximity-presentation">
        <ProductScene />
        <div className="proximity-scene-caption"><span>NEARBY, BY NATURE</span><small>Nearby discovery concept · no real transaction</small></div>
      </div>
    </div>
  );
}
