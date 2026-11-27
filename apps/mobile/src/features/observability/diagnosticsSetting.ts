// Telemetry-free fork: connection traces are never sent, whatever the stored
// preference or Settings toggle says.
export const connectionTracesEnabled = () => false;
export function setConnectionTracesEnabled(enabled: boolean): void {
  void enabled;
}
