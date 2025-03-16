<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Registro de ingreso y salida

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-4.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/1.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 Los registros de ingreso y salida son operaciones esenciales y de gran responsabilidad dentro de las operaciones logísticas, estos pueden realizarse de manera manual o mediante sistemas de información o programas especializados, los cuales permiten que todos los departamentos de la organización accedan a la información en tiempo real. Es crucial que todas las personas involucradas se comprometan a mantener la información actualizada en todo momento.


    h4 Características

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-5.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-8.col-md-7(data-aos="fade-left")
        SlyderF.circl-arrow.mb-4(columnas="col-lg-6")
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center Mantienen los inventarios de la empresa actualizados de manera continua.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center Optimiza los procesos de recepción y despacho, especialmente en empresas de alto volumen.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
