import { ChangeToken } from "./changetoken";

/**
 * Defines a query that is performed against the change log.
 */
export interface ChangeQuery {
    /**
     * Gets or sets a value that specifies whether add changes are included in the query.
     */
    Add?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to alerts are included in the query.
     */
    Alert?: boolean;

    /**
     * Gets or sets a value that specifies the end date and end time for changes that are returned through the query.
     */
    ChangeTokenEnd?: ChangeToken;

    /**
     * Gets or sets a value that specifies the start date and start time for changes that are returned through the query.
     */
    ChangeTokenStart?: ChangeToken;

    /**
     * Gets or sets a value that specifies whether changes to content types are included in the query.
     */
    ContentType?: boolean;

    /**
     * Gets or sets a value that specifies whether deleted objects are included in the query.
     */
    DeleteObject?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to fields are included in the query.
     */
    Field?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to files are included in the query.
     */
    File?: boolean;

    /**
     * Gets or sets value that specifies whether changes to folders are included in the query.
     */
    Folder?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to groups are included in the query.
     */
    Group?: boolean;

    /**
     * Gets or sets a value that specifies whether adding users to groups is included in the query.
     */
    GroupMembershipAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether deleting users from the groups is included in the query.
     */
    GroupMembershipDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether general changes to list items are included in the query.
     */
    Item?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to lists are included in the query.
     */
    List?: boolean;

    /**
     * Gets or sets a value that specifies whether move changes are included in the query.
     */
    Move?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to the navigation structure of a site collection are included in the query.
     */
    Navigation?: boolean;

    /**
     * Gets or sets a value that specifies whether renaming changes are included in the query.
     */
    Rename?: boolean;

    /**
     * Gets or sets a value that specifies whether restoring items from the recycle bin or from backups is included in the query.
     */
    Restore?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether modifications to security policies are included in the query.
     */
    SecurityPolicy?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to site collections are included in the query.
     */
    Site?: boolean;

    /**
     * Gets or sets a value that specifies whether updates made using the item SystemUpdate method are included in the query.
     */
    SystemUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether update changes are included in the query.
     */
    Update?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to users are included in the query.
     */
    User?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to views are included in the query.
     */
    View?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to Web sites are included in the query.
     */
    Web?: boolean;
}
