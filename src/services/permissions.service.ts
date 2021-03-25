// TODO: Implement Permissions Service

/**
 * Used to indicate permissions levels for bot users.
 * SUPER_ADMIN refers to administrators across all bot servers (i.e. bot maintainers).
 */
export enum PermissionsLevel {
    EVERYONE,
    USER,
    MOD,
    ADMIN,
    SUPER_ADMIN
}
