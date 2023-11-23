document.addEventListener("DOMContentLoaded", function () {


    // Mapeo de preguntas a carreras
    var carreras = {
        'Administración de Empresas': [1, 11, 20, 21, 41],
        'Enfermería Técnica': [2, 12, 21, 22, 41],
        'Mecatrónica Automotriz': [3, 13, 23, 32, 35],
        'Electrónica Industrial': [4, 14, 24, 26, 41],
        'Mecánica de Producción Industrial': [1, 13, 23, 34, 41],
        'Secretariado Ejecutivo': [6, 15, 36, 38, 41],
        'Contabilidad': [7, 16, 27, 36, 47],
        'Guía Oficial de Turismo': [8, 17, 28, 38, 48],
        'Laboratorio Clínico y Anatomía Patológica': [2, 19, 29, 49, 41],
        'Arquitectura de Plataformas y Servicios de Tecnologías de Información': [10, 20, 31, 47, 50]
    };

    // Manejo del clic en el botón "Corregir"
    $("#corregir").on("click", function () {
        var puntajes = Array(50).fill(0); // Inicializar puntajes para cada pregunta
        var respuestas = $(":radio:checked"); // Obtener respuestas seleccionadas

        // Calcular puntajes
        respuestas.each(function () {
            var pregunta = parseInt($(this).attr("name").substring(8)) - 1;
            var valor = parseInt($(this).val());
            puntajes[pregunta] += valor;
        });

        // Encontrar la carrera con mayor puntaje
        var maxPuntaje = 0;
        var carreraSeleccionada = "";
        for (var carrera in carreras) {
            var puntajeCarrera = carreras[carrera].reduce(function (total, pregunta) {
                return total + puntajes[pregunta - 1];
            }, 0);

            if (puntajeCarrera > maxPuntaje) {
                maxPuntaje = puntajeCarrera;
                carreraSeleccionada = carrera;
            }
        }

        // Mostrar resultado
    
        Swal.fire({
            title: "Tu carrera sugerida es: " + carreraSeleccionada,
            icon: "success", // Puedes cambiar "success" por "info", "warning", "error", etc.
            confirmButtonText: "OK"
        });
    });
    
});
