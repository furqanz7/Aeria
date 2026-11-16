import { Feather } from "./CinematicJourney";
import Reveal from "./Reveal";

export default function AirIdentity() {
  return (
    <div className="air-identity">
      <div className="identity-halo" aria-hidden="true" />
      <div className="identity-threads" aria-hidden="true"><i /><i /><i /></div>
      <Feather className="identity-feather" />
      <Reveal className="identity-open-name"><span>you</span><span>@aeria</span></Reveal>
      <span className="identity-open-line" aria-hidden="true" />
      <p>One name. A world of connection.</p>
      <small>An illustrative Aeria ID</small>
    </div>
  );
}
