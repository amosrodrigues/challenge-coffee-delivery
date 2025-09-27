import { dtRum } from './dtRum'

/**
 * Função responsável por enviar um erro que ocorreu no código, geralmente o erro de um try/catch
 */
interface CustomError extends Error { 
    message: string;
    line?: number;
    column?: number;
    stack?: string;
    name: string;
    file?: string;  
}

export function dynatraceCustomError(error: string | CustomError) {
    const pref = 'Custom Error'
    const isErrorString = typeof error === 'string'
    const errorReport = isErrorString
    ? `${pref} - ${error}`
    : error
    // : new Error(pref, {
    //       cause: error,
    //   })
    dtRum?.reportError(errorReport)
}
