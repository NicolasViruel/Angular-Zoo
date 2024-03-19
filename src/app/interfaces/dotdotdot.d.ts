declare module 'dotdotdot-js' {
    interface DotDotDotOptions {
        // Opciones de configuración del plugin dotdotdot
        ellipsis?: string; // Caracter(es) que se utiliza(n) para representar la elipsis
        wrap?: string; // Elemento HTML que envuelve al contenido recortado (por ejemplo, 'div')
        fallbackToLetter?: boolean; // Si es true, el plugin intentará dividir por letras si no puede dividir por palabras
        after?: string | Element | Node | JQuery; // Elemento que se agregará al final del texto truncado
        watch?: boolean; // Si es true, el plugin observará los cambios en el tamaño del contenedor y volverá a calcular el truncado
        height?: number | string; // Altura máxima del contenido antes de ser truncado (puede ser un número en píxeles o una cadena como '100px')
        tolerance?: number; // Tolerancia para el cálculo del truncado (número de píxeles)
        callback?: Function; // Función que se llama después de que se haya aplicado el truncado
    }

    interface JQuery {
        dotdotdot(options?: DotDotDotOptions): JQuery;
    }
}