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


    h4(data-aos="fade-right") Características

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-5.col-10.mb-3.mb-lg-0.d-none.d-md-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-8.col-md-7(data-aos="fade-left")
        SlyderF.circl-arrow.shadow-tarj.mb-4(columnas="col-lg-6")
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center.mb-0 Mantienen los inventarios de la empresa actualizados de manera continua.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center.mb-0 Optimiza los procesos de recepción y despacho, especialmente en empresas de alto volumen.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center.mb-0 Facilitan el almacenamiento de información, acelerando los procesos documentales.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center Permiten realizar un seguimiento estadístico del ingreso y salida de mercancías, lo cual es fundamental para la toma de decisiones.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center.mb-0 Contribuyen al control de la trazabilidad de los productos a lo largo de la cadena de suministro.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center.mb-0 Organizan la información de manera ordenada y accesible.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/3.svg' alt='')
            p.text-center.mb-0 Proporcionan visibilidad sobre el movimiento de la mercancía, mejorando la gestión logística.


    TabsA.color-acento-botones.t3-tabs.mb-5(data-aos="fade-down")
      .tarjeta.bg2.p-4.px-lg-5(titulo="Procedimiento de registros")
        h4 Procedimiento de registros
        p Existen tres tipos de procedimientos para el registro de objetos, los cuales están relacionados con la gestión de inventarios, adquisiciones, devoluciones y despachos de mercancías.
      .tarjeta.bg2.p-4.px-lg-5(titulo="Procedimiento de mercancías generales")
        h4 Procedimiento de mercancías generales
        p También conocido como procedimiento global, este proceso abarca el registro integral del manejo de la mercancía, incluyendo tanto las operaciones logísticas como los aspectos administrativos. Dentro de este procedimiento, se incluyen los siguientes registros:
        ul.lista-ul--color.fa-lista
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Inventarios:] control y seguimiento de los productos en existencia.
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Adquisiciones o compras (recibo):] registro de la recepción de mercancías adquiridas.
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Devoluciones de ventas:] registro de los productos devueltos por los clientes.
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Devoluciones de compras:] registro de los productos devueltos a los proveedores.
          li 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Ventas (despachos):] registro de los productos despachados a los clientes.
      .tarjeta.bg2.p-4.px-lg-5(titulo="Procedimiento pormenorizado")
        h4 Procedimiento pormenorizado
        p También conocido como procedimiento analítico, este proceso implica el manejo de varias cuentas que están directamente relacionadas con las operaciones realizadas, en el caso de la mercancía, estas cuentas suelen denominarse cuentas auxiliares de mercancía, y dentro de ellas se incluyen:
        ul.lista-ul--color.fa-lista
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Inventarios:] control detallado de los productos en existencia.
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Adquisiciones:] registro de las mercancías adquiridas.
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Devoluciones de compras:] registro de los productos devueltos a los proveedores.
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Devoluciones de ventas:] registro de los productos devueltos por los clientes.
          li 
            i.fas.fa-map-marker-alt
            span.mb-0 #[b Ventas (despachos):] registro de los productos despachados a los clientes.
      .tarjeta.bg2.p-4.px-lg-5(titulo="Procedimiento de inventario perpetuo")
        h4 Procedimiento de inventario perpetuo
        p Este procedimiento es el tradicional, permite conocer el costo del inventario en cualquier momento, lo cual es una herramienta para saber costo de ventas y por lo tanto las utilidades o pérdidas generadas. Las cuentas utilizadas son:
        ul.lista-ul--color.fa-lista
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 Almacén (incluye recibo y devoluciones).
          li.mb-1 
            i.fas.fa-map-marker-alt
            span.mb-0 Costo de venta.
          li 
            i.fas.fa-map-marker-alt
            span.mb-0 Ventas (despachos).
      
    p.mb-4 Cualquier procedimiento que se utilice, está determinado por las organizaciones y sus sistemas de información, realizar adecuadamente el registro de los ingresos y salidas permite fiabilidad y confiabilidad en el conocimiento del estado financiero de las empresas.
    
    .titulo-sexto.color-acento-contenido.mb-2
      h5 Figura 12. 
      span Procedimiento de registro de entrada
    .row.col-lg-4
      figure
        img(src='@/assets/curso/temas/t3/fig12.png', alt='Ventana de software para el registro de entrada de documentos, mostrando campos para número y fecha de registro, origen, destino, tipo de transporte y resumen.')  


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
