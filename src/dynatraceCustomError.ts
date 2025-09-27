import { dtRum } from './dtRum'

/**
 * Função responsável por enviar um erro que ocorreu no código, geralmente o erro de um try/catch
 */
export function dynatraceCustomError(error: string | Error) {
    const pref = 'Custom Error'
    const isErrorString = typeof error === 'string'
    const errorReport = isErrorString
        ? `${pref} - ${error}`
        : new Error(pref, {
              cause: error,
          })
    dtRum?.reportError(errorReport)
}
