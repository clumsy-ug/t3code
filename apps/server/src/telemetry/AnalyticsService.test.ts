import { assert, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import * as AnalyticsService from "./AnalyticsService.ts";

// Telemetry-free fork: the service is a permanent no-op, so nothing is ever
// queued or sent, whatever the environment or policy says.
it.effect("record always refuses and flush/recordOwners do nothing", () =>
  Effect.gen(function* () {
    const analytics = yield* AnalyticsService.AnalyticsService;
    assert.strictEqual(yield* analytics.record("test.event", { index: 1 }), false);
    assert.strictEqual(yield* analytics.record("agent.feedback", {}, { anonymous: true }), false);
    yield* analytics.recordOwners([], "server");
    yield* analytics.flush;
  }).pipe(Effect.provide(AnalyticsService.layer)),
);
