"use client";

import type { CSSProperties } from "react";
import { Arrow, Symbol } from "./Icons";

export type DiscoveryPhase = "idle" | "searching" | "found" | "connected";

export default function WalletPhone({
  recipient,
  merchant = false,
  className = "",
  discoveryPhase = "idle",
}: {
  recipient: string;
  merchant?: boolean;
  className?: string;
  discoveryPhase?: DiscoveryPhase;
}) {
  return (
    <div className={`wallet-device ${className}`}>
      <i className="wallet-side-key" />
      <div
        className={`wallet-screen ${merchant ? "wallet-screen-sheet" : "wallet-screen-nearby"}`}
      >
        <div className="wallet-status">
          <span>9:41</span>
          <i className="wallet-island" />
          <span className="wallet-status-icons">
            <i />
            <b />
          </span>
        </div>
        {merchant ? (
          <>
            <div className="wallet-sheet-nav">
              <span>×</span>
              <strong>Aeria</strong>
              <span>···</span>
            </div>
            <div className="wallet-identity-card">
              <span className="wallet-card-wordmark">Aeria</span>
              <span className="wallet-card-caption">
                ONE IDENTITY. EVERYWHERE.
              </span>
              <div>
                <span>you@aeria</span>
                <small>AERIA ID</small>
              </div>
            </div>
            <div className="wallet-merchant-state">
              <Symbol name="nearby" />
              <strong>Merchant nearby</strong>
              <span>Aeria Terminal</span>
            </div>
            <div className="wallet-detail-row">
              <span>Connection</span>
              <strong>
                Ready to review <Arrow />
              </strong>
            </div>
            <div className="wallet-hold-prompt">
              <Symbol name="nearby" />
              <strong>Hold near terminal</strong>
              <span>Review the merchant before continuing.</span>
            </div>
          </>
        ) : (
          <>
            <div className="wallet-nearby-atmosphere" aria-hidden="true"><i /><i /></div>
            <div className="wallet-nearby-brand">Aeria</div>
            <div className="wallet-nearby-particles">
              {Array.from({ length: 55 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    left: `${(i * 37.13) % 100}%`,
                    top: `${(i * 19.71) % 100}%`,
                    opacity: 0.12 + (i % 5) * 0.12,
                    "--nearby-opacity": 0.12 + (i % 5) * 0.12,
                    "--nearby-duration": `${4.2 + (i % 4) * 0.4}s`,
                    "--nearby-delay": `${-((i * 0.618) % (4.2 + (i % 4) * 0.4))}s`,
                  } as CSSProperties}
                />
              ))}
            </div>
            <div className="wallet-discovery-search" aria-hidden="true">
              <span>{discoveryPhase === "idle" ? "READY TO CONNECT" : "LOOKING NEARBY"}</span>
              <Symbol name="nearby" />
              <small>{discoveryPhase === "idle" ? "Nearby discovery" : "Finding Aeria IDs…"}</small>
              <i className="wallet-discovery-scan" />
            </div>
            <div className="wallet-nearby-person">
              <span>{discoveryPhase === "connected" ? "CONNECTED" : "NEARBY"}</span>
              <strong>{recipient}</strong>
              <small>{recipient.toLowerCase()}@aeria</small>
            </div>
            <div className="wallet-nearby-instruction">
              <Symbol name={discoveryPhase === "connected" ? "check" : "nearby"} />
              <span>{discoveryPhase === "connected" ? "You’ve found each other" : discoveryPhase === "searching" ? "Discovering nearby" : discoveryPhase === "found" ? "Aeria ID discovered" : "Bring devices together"}</span>
            </div>
          </>
        )}
        <i className="wallet-home-bar" />
      </div>
    </div>
  );
}
