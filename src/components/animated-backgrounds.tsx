import { motion } from "motion/react"

export function ConnectionDots() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg viewBox="0 0 400 300" className="h-full w-full">
        <motion.circle cx="80" cy="60" r="4" fill="currentColor" className="text-primary"
          animate={{ r: [4, 8, 4], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="200" cy="90" r="3" fill="currentColor" className="text-primary"
          animate={{ r: [3, 6, 3], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle cx="320" cy="50" r="5" fill="currentColor" className="text-accent"
          animate={{ r: [5, 9, 5], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle cx="100" cy="180" r="3" fill="currentColor" className="text-primary"
          animate={{ r: [3, 7, 3], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.circle cx="300" cy="200" r="4" fill="currentColor" className="text-accent"
          animate={{ r: [4, 8, 4], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.circle cx="200" cy="240" r="3" fill="currentColor" className="text-primary"
          animate={{ r: [3, 6, 3], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.line x1="80" y1="60" x2="200" y2="90" stroke="currentColor" className="text-primary" strokeWidth="1" opacity="0.3" />
        <motion.line x1="200" y1="90" x2="320" y2="50" stroke="currentColor" className="text-accent" strokeWidth="1" opacity="0.3" />
        <motion.line x1="80" y1="60" x2="100" y2="180" stroke="currentColor" className="text-primary" strokeWidth="1" opacity="0.2" />
        <motion.line x1="320" y1="50" x2="300" y2="200" stroke="currentColor" className="text-accent" strokeWidth="1" opacity="0.2" />
        <motion.line x1="100" y1="180" x2="200" y2="240" stroke="currentColor" className="text-primary" strokeWidth="1" opacity="0.2" />
        <motion.line x1="300" y1="200" x2="200" y2="240" stroke="currentColor" className="text-accent" strokeWidth="1" opacity="0.2" />
      </svg>
    </div>
  )
}

export function PulseAlert() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
      <motion.div
        className="absolute h-32 w-32 rounded-full border border-destructive"
        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-20 w-20 rounded-full border border-destructive"
        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute h-10 w-10 rounded-full bg-destructive/20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  )
}

export function LoopingArrows() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
      <motion.div
        className="flex gap-2 text-muted-foreground"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute flex gap-2 text-muted-foreground"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </motion.div>
    </div>
  )
}

export function FailedBars() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-2 overflow-hidden p-4 opacity-15">
      {[40, 70, 30, 90, 50, 80, 60].map((h, i) => (
        <motion.div
          key={i}
          className="w-3 rounded-t bg-destructive"
          style={{ height: `${h}%` }}
          animate={{ height: [`${h}%`, `${h * 0.3}%`, `${h}%`] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}
    </div>
  )
}

export function IncidentList() {
  const incidents = [
    { time: "14:23", text: "503 errors", color: "bg-destructive" },
    { time: "14:18", text: "Latency spike", color: "bg-destructive" },
    { time: "14:12", text: "Deploy failed", color: "bg-destructive" },
    { time: "14:05", text: "Rollback", color: "bg-destructive" },
    { time: "13:58", text: "Alert triggered", color: "bg-destructive" },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      <div className="flex flex-col gap-1.5 p-4">
        {incidents.map((inc, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 rounded bg-muted/50 px-2 py-1"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.4, duration: 0.5 }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${inc.color}`} />
            <span className="text-[10px] font-mono text-muted-foreground">{inc.time}</span>
            <span className="text-[10px] text-muted-foreground">{inc.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function DownwardChart() {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden opacity-15">
      <svg viewBox="0 0 300 120" className="h-full w-full">
        <motion.path
          d="M0 80 L50 60 L100 70 L150 40 L200 50 L250 20 L300 30"
          fill="none"
          stroke="currentColor"
          className="text-destructive"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 90 L50 75 L100 85 L150 55 L200 65 L250 35 L300 45"
          fill="none"
          stroke="currentColor"
          className="text-destructive/50"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  )
}
