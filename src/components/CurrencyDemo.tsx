"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionPlayback } from "@/lib/motion";
import { Symbol } from "./Icons";
const examples = [
  {
    from: "SAR",
    to: "INR",
    rate: 22.4,
    fee: 1,
    source: "Saudi riyal",
    destination: "Indian rupee",
  },
  {
    from: "USD",
    to: "EUR",
    rate: 0.92,
    fee: 1,
    source: "US dollar",
    destination: "Euro",
  },
  {
    from: "GBP",
    to: "AED",
    rate: 4.65,
    fee: 1,
    source: "British pound",
    destination: "UAE dirham",
  },
];
export default function CurrencyDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: .25 });
  const playing = useMotionPlayback(visible);
  const [pair, setPair] = useState(0);
  const [amount, setAmount] = useState("100");
  const quote = examples[pair];
  const value = Number(amount);
  const valid =
    amount.trim() !== "" &&
    Number.isFinite(value) &&
    value > quote.fee &&
    value <= 100000;
  const received = valid ? (value - quote.fee) * quote.rate : null;
  return (
    <div ref={ref} className="currency-demo" data-motion-active={playing}>
      <div className="quote-heading">
        <Symbol name="globe" />
        <span>A world of possibilities</span>
        <small>EXAMPLE</small>
      </div>
      <label className="pair-label" htmlFor="currency-route">
        Explore a currency route
      </label>
      <select
        id="currency-route"
        value={pair}
        onChange={(e) => setPair(Number(e.target.value))}
      >
        {examples.map((q, i) => (
          <option key={q.from} value={i}>
            {q.from} → {q.to}
          </option>
        ))}
      </select>
      <div className="quote-source">
        <label htmlFor="send-amount">You send</label>
        <div>
          <input
            id="send-amount"
            type="number"
            min="1.01"
            max="100000"
            step=".01"
            inputMode="decimal"
            value={amount}
            aria-invalid={!valid}
            aria-describedby="quote-note"
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>{quote.from}</span>
        </div>
        <small>{quote.source}</small>
      </div>
      <div className="quote-connection" aria-hidden="true">
        <span />
        <Symbol name="layers" />
        <span />
      </div>
      <div className="quote-receive" aria-live="polite">
        <span>They receive</span>
        <motion.strong
          key={`${quote.to}-${received}`}
          initial={playing ? { opacity: 0.25, y: 7 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: playing ? 0.45 : 0 }}
        >
          {received === null
            ? "—"
            : received.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          <small>{quote.to}</small>
        </motion.strong>
        <span>{quote.destination}</span>
      </div>
      <div className="quote-detail">
        <span>Illustrative rate</span>
        <b>
          1 {quote.from} = {quote.rate.toFixed(2)} {quote.to}
        </b>
      </div>
      <div className="quote-detail">
        <span>Example fee · included above</span>
        <b>
          {quote.fee.toFixed(2)} {quote.from}
        </b>
      </div>
      <div className="quote-detail">
        <span>Delivery estimate</span>
        <b>Shown with a live quote</b>
      </div>
      <p
        id="quote-note"
        className={`quote-note ${!valid ? "input-error" : ""}`}
      >
        {valid
          ? "Illustrative values, not a live quote. Actual rates, fees, timing and availability depend on the approved payment route."
          : "Enter an amount above 1 and no more than 100,000 to explore this example."}
      </p>
    </div>
  );
}
