import chalk from 'chalk'

export const useLogger = ( message, type = '' ) => {
    switch ( type ) {
        case 'error':
            console.error( chalk.red( 'error:' ), message )
            break
        case 'warning':
            console.warn( chalk.yellow( 'warning:' ), message )
            break
        case 'success':
            console.log( chalk.green( 'success:' ), message )
            break
        case 'info':
            console.log( chalk.blueBright( 'info:' ), message )
            break
        default:
            console.log( message )
            break
    }
}
