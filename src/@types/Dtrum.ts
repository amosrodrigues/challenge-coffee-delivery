/* eslint-disable @typescript-eslint/no-explicit-any */
export enum ActionNameResult {
  SUCCESS,
  ACTION_NOT_FOUND,
  INVALID_ACTION_NAME,
  INVALID_ACTION_ID,
}

export type PropertyObject = {
  [key: string]: Date | number | string
}

export type PropertyMap<T> = {
  [key: string]: T
}
export type FailedProperty = {
  key: string
  reason: string
}
export type SuccessfulProperty = {
  key: string
  value: string
}
export type PropertiesSendingReport = {
  failedProperties: FailedProperty[]
  info: string
  sentProperties: SuccessfulProperty[]
}

export type PageLeaveListener = (unloadRunning: boolean) => void

export type Dtrum = {
  /**
   * The function actionName allows the change of an action name. Normally the name of the current action will get changed.
   * If you wan't to change a specific (not yet sent) action you can also pass the action id as second parameter.
   * @param actionName
   * @param actionId
   * @returns actionName an ActionNameResult whether the process was successful
   */
  actionName(
    actionName: string,
    actionId?: number,
  ): ActionNameResult | undefined

  /**
   * Adds a listener that is called when the user is leaving the page, but before the RUM monitoring beacon is sent Use when you want to hook into the unload of the page.
   * @param listener A function that will be called in case the user leaves the page
   */
  addPageLeavingListener(listener: PageLeaveListener): void

  /**
   * Enters a new custom action. Use to set the load start event for a new custom action. Needs to be called before leaveAction, which closes the custom action.
   * @param actionName Name of the action
   * @param actionType  Type of the action (e.g., can be 'click', 'load', 'KD',...) - DEPRECATED: not used any more, will be removed in July 2022.
   * @param startTime Timestamp in milliseconds. if null, current time is used.
   * @param sourceUrl string
   * @returns ID of the created action
   */
  enterAction(
    actionName: string,
    actionType?: string,
    startTime?: number,
    sourceUrl?: string,
  ): number

  /**
   * Extends or initiates actions. Use when you want to extend an active Load or XHR action by another unlinked XHR call (i.e., action). This is particularly useful when the XHR call in question is asynchronous in nature and therefore can't automatically be correlated to an action, which otherwise would lead to the action being closed too early and inaccurate metrics measurements (e.g., user action duration). Needs to be called before leaveXhrAction.
   * @param type Optional additional info about type of XHR (e.g., framework name, etc.)
   * @param xmode XHR action creation mode 0 ... Just extend running XHR actions 1 ... Extend any running action 2 ... Extend any running action - visible subaction - DEPRECATED: use 1 instead 3 ... Start action if user input is present
   * @param xhrUrl url of the requested resource
   */
  enterXhrAction(type?: string, xmode?: 0 | 1 | 2 | 3, xhrUrl?: string): number

  /**
   * Indicates the end of an XHR action
   * @param actionId ID of the XHR Action
   * @param stopTime
   */
  leaveXhrAction(actionId: number, stopTime?: number): void

  /**
   * Sets the user tag. Use to identify individual users across different browsers, devices, and user sessions.
   * @param value The name of the user. For example, use a name, userid, or your user's email address.
   */
  identifyUser(value: string): void

  /**
   * Leaves an action that has previously been created by an enterAction call. Use to set the load end event for a custom action and to complete its creation. Needs to be called after enterAction.
   * @param actionId ID of the action to leave. must be the value returned by enterAction
   * @param stopTime Timestamp in milliseconds. Note that, when providing a stop time, it will force stop the action and prevent visually complete from extending it.
   * @param startTime Optional start time in milliseconds (necessary if start time should be modified). Note that, when providing a start time, it mustn't be longer than an hour in the past, otherwise the RUM monitoring code will ignore it.
   */
  leaveAction(actionId: number, stopTime?: number, startTime?: number): void

  /**
   * Enables/disables automatic action detection. Use when you want to instrument your application only manually.
   * @param enabled Whether automatic action detection should be enabled or disabled
   */
  setAutomaticActionDetection(enabled: boolean): void

  /**
   * Reports an error object to Dynatrace. Use when you catch errors in your own application code but you also want to propagate them to Dynatrace instead of logging them yourself. If errors are handled by your own application code it will stop the error from being handled by the global JavaScript onerror event handler, which is used by Dynatrace to automatically capture JavaScritp errors.
   * @param error The error to be reported. Any browser error object is supported and if the error doesn't have a stacktrace the RUM JavaScipt monitoring code will attempt to generate one. Alternatively create your own object that has the following properties set: 'message', 'file', 'line', 'column', and 'stack'. The 'message' property must be provided; all other values are optional.
   * @param parentActionId parent action id. if not passed or null, error is added to current action
   */
  reportError(error: string | Error, parentActionId?: number): void

  reportCustomError(
    key: string,
    value: string,
    hint?: string,
    parentingInfo?: number | boolean,
  ): void

  /**
   * Forces beacon sending to make sure actions aren't lost. For example, use before a window unload event by adding a addPageLeavingListener.
   * @param forceSync Force synchronous sending of beacons. If false, the beacon will be sent asynchronously.
   * @param sendPreview Force sending of preview beacons which haven't been closed yet.
   * @param killUnfinished Kills unfinished actions and sends them immediately. Handle with care, actions might be inaccurate.
   */
  sendBeacon(
    forceSync: boolean,
    sendPreview: boolean,
    killUnfinished: boolean,
  ): void

  /**
   * Sends session properties on a beacon currently only accepts valid java long, java double (as a string representation), Date objects, and short strings of a maximum length of 100 characters.
   * NOTE: session properties need to have a lower case key!
   *
   * Make sure to first define session properties under Application settings before making this API call.
   * @param javaLongOrObject JSON object containing key value pairs of valid numbers. Value should be between range -9223372036854776000 & 9223372036854776000
   * @param date JSON object containing key value pairs of JavaScript date objects. Value should be JavaScript Date object
   * @param shortString JSON object containing key value pairs of strings. Value character count should be less than 100 characters
   * @param javaDouble JSON object containing key value pairs of valid floating point numbers.
   * Value should be between range -1.7976931348623157e+308 & 1.7976931348623157e+308
   * Each key value pair must be defined in the following format 'key: { value: value, public?: boolean }' Public property is optional and if not declared as true values will be sent as masked(dT_pv) in doNotTrack mode
   */
  sendSessionProperties(
    javaLongOrObject?: null | PropertyObject,
    date?: null | PropertyMap<Date>,
    shortString?: null | PropertyMap<string>,
    javaDouble?: null | PropertyMap<number>,
  ): void | PropertiesSendingReport

  /**
   * Enables the RUM monitoring code in case it was initially disabled via the opt-in mode. Use in combination with a user consent tool to enable RUM monitoring in case the consent has been provided.
   */
  enable(): void

  /**
   * Enables manual page detection. After this is called the RUM monitoring code will stop detecting page and page group names automatically and only accepts them via setPage. It is recommended to call this as early as possible.
   */
  enableManualPageDetection(): void

  /**
   * Reports the HTTP status code and an additional message for the response of the current XHR action. For example, use when the HTTP status code of your XHR response returns 200, while the result returned by the server indicates a failed request. Needs to be called before the XHR action is finished and all listeners have been invoked.
   * @param responseCode The response code of the current XHR action
   * @param message An additional informational message
   * @param parentActionId The optional ID of the action to mark as failed. If it is not present, the currently open action is used.
   */
  markXHRFailed(
    responseCode: number,
    message: string,
    parentActionId?: number,
  ): boolean
}
