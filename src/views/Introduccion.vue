<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .row.bgc-1.align-items-center.p-3
      .col-lg-12.col-12.px-lg-5.px-md-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center.mb-4
            .col-lg-1.col-md-2.col-5.mb-3.mb-lg-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/intro/1.svg', alt='')
            .col-lg-11.col-md-10.col-12.px-0(data-aos="fade-left")
              p.mb-0 Los registros de ingreso y salida de mercancías se han vuelto esenciales con el tiempo, ya que son fundamentales para la programación de despachos, la solicitud de productos y la gestión de inventarios, estos registros determinan los movimientos que se pueden realizar en momentos específicos, lo que los convierte en una herramienta clave en la operación logística.     

          p.mb-4(data-aos="fade") Tanto los registros manuales como los digitales deben seguir procedimientos establecidos por las organizaciones y ser lo suficientemente confiables, ya que constituyen la base para diversas transacciones comerciales. Para registrar correctamente estos movimientos, es necesario contar con los documentos adecuados que proporcionen toda la información requerida para su correcta diligencia y procesamiento.
       
          .col-12(data-aos="fade-down")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
