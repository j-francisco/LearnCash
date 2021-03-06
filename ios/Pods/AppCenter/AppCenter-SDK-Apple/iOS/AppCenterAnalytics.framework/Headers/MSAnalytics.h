#import "MSAnalyticsTransmissionTarget.h"
#import "MSServiceAbstract.h"

@class MSEventProperties;

NS_ASSUME_NONNULL_BEGIN

/**
 * App Center analytics service.
 */
@interface MSAnalytics : MSServiceAbstract

/**
 * Track an event.
 *
 * @param eventName  Event name. Cannot be `nil` or empty.
 *
 * @discussion Validation rules apply depending on the configured secret.
 *
 * For App Center, the name cannot be longer than 256 and is truncated otherwise.
 *
 * For One Collector, the name needs to match the `[a-zA-Z0-9]((\.(?!(\.|$)))|[_a-zA-Z0-9]){3,99}` regular expression.
 */
+ (void)trackEvent:(NSString *)eventName;

/**
 * Track a custom event with optional string properties.
 *
 * @param eventName  Event name. Cannot be `nil` or empty.
 * @param properties Dictionary of properties. Keys and values must not be `nil`.
 *
 * @discussion Additional validation rules apply depending on the configured secret.
 *
 * For App Center:
 *
 * - The event name cannot be longer than 256 and is truncated otherwise.
 *
 * - The property names cannot be empty.
 *
 * - The property names and values are limited to 125 characters each (truncated).
 *
 * - The number of properties per event is limited to 20 (truncated).
 *
 *
 * For One Collector:
 *
 * - The event name needs to match the `[a-zA-Z0-9]((\.(?!(\.|$)))|[_a-zA-Z0-9]){3,99}` regular expression.
 *
 * - The `baseData` and `baseDataType` properties are reserved and thus discarded.
 *
 * - The full event size when encoded as a JSON string cannot be larger than 1.9MB.
 */
+ (void)trackEvent:(NSString *)eventName withProperties:(nullable NSDictionary<NSString *, NSString *> *)properties;

/**
 * Track a custom event with name and optional typed properties.
 *
 * @param eventName  Event name.
 * @param properties Typed properties.
 *
 * @discussion The following validation rules are applied:
 *
 * The name cannot be null or empty.
 *
 * The property names or values cannot be null.
 *
 * Double values must be finite (NaN or Infinite values are discarded).
 *
 * Additional validation rules apply depending on the configured secret.
 *
 *
 * For App Center:
 *
 * - The event name cannot be longer than 256 and is truncated otherwise.
 *
 * - The property names cannot be empty.
 *
 * - The property names and values are limited to 125 characters each (truncated).
 *
 * - The number of properties per event is limited to 20 (truncated).
 *
 *
 * For One Collector:
 *
 * - The event name needs to match the `[a-zA-Z0-9]((\.(?!(\.|$)))|[_a-zA-Z0-9]){3,99}` regular expression.
 *
 * - The `baseData` and `baseDataType` properties are reserved and thus discarded.
 *
 * - The full event size when encoded as a JSON string cannot be larger than 1.9MB.
 */
+ (void)trackEvent:(NSString *)eventName withTypedProperties:(nullable MSEventProperties *)properties;

/**
 * Pause transmission of Analytics logs. While paused, Analytics logs are saved to disk.
 *
 * @see resume
 */
+ (void)pause;

/**
 * Resume transmission of Analytics logs. Any Analytics logs that accumulated on disk while paused are sent to the
 * server.
 *
 * @see pause
 */
+ (void)resume;

/**
 * Get a transmission target.
 *
 * @param token The token of the transmission target to retrieve.
 *
 * @returns The transmission target object.
 *
 * @discussion This method does not need to be annotated with
 * NS_SWIFT_NAME(transmissionTarget(forToken:)) as this is a static method that
 * doesn't get translated like a setter in Swift.
 *
 * @see MSAnalyticsTransmissionTarget for comparison.
 */
+ (MSAnalyticsTransmissionTarget *)transmissionTargetForToken:(NSString *)token;

@end

NS_ASSUME_NONNULL_END
