<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Documentación, recibo y despacho de objetos
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-lg-7
          img.d-none.d-lg-block.w-80(src='@/assets/curso/temas/t1/2.svg', alt='')
          p La documentación en los procesos de recibo y despacho, así como su adecuado diligenciamiento, es fundamental para el control de las mercancías que ingresan y se entregan entre departamentos, áreas o dentro de la misma organización. Existen diversos formatos que pueden utilizarse para el manejo y registro de esta información, algunos de los cuales se detallan a continuación.
          
      .row.align-items-center.mb-5.subt(data-aos="fade-right")
        .col-auto.ico
          img(src='@/assets/curso/temas/t2/subt.svg', alt='')
        .col
          h3.mb-0.p-1.px-3 Tipos de documentación

      .subt-2.px-5.py-1.mb-4(data-aos='fade')
        h4.mb-0 Requisiciones

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-md-2.col-4.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/3.svg', alt='')
        .col-lg-11.col-md-10(data-aos="fade-left")
          p.mb-0 La requisición es un documento interno utilizado dentro de la empresa para solicitar, por escrito, la adquisición de productos u objetos, este documento puede emplearse entre diferentes áreas, por ejemplo, para el traslado de mercancías de un lugar a otro, o para solicitar al departamento de compras la gestión de adquisición de bienes. 
      
      .bg3.p-4.py-5.mb-4(data-aos='fade-down')
        p.fw-bold La requisición debe incluir la siguiente información:
        .row.justify-content-center.align-items-center
          .col-lg-5
            ul.lista-ul--color.fa-lista
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Fecha:] día en que se realiza la solicitud.
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Datos del solicitante:] departamento o área de la empresa, así como el nombre de la persona que solicita el producto u objeto.
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Número de requisición:] número único asignado a la solicitud para su seguimiento.
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Descripción del material:] especificaciones técnicas exactas del artículo solicitado, incluyendo la unidad de medida y, si corresponde, su código o referencia de identificación.
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Cantidad requerida:] número de unidades solicitadas.
              li.mb-1
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Datos adicionales:] posibles proveedores, en caso de que la requisición se haga al departamento de compras para la adquisición del producto.
              li.mb-0 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Nombre y firma del solicitante:] para validar la solicitud.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/4.png', alt='')
          .col-lg-3
            p.mb-0 En algunas organizaciones, los formatos de requisición tienen un diseño preestablecido y numerado, el cual se asigna a los departamentos para asegurar el control y registro de la información; si la mercancía o el objeto solicitado está disponible, la entrega puede realizarse utilizando el mismo formato, registrándose en el sistema o en el proceso de inventarios que se utilice.

      .row.justify-content-evenly.mb-5
        .col-lg-4.col-md-9(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Formato de requisición de materiales
          figure
            img(src='@/assets/curso/temas/t1/fig1.png', alt='Formulario de requisición de materiales con campos para información de la empresa, número de requisición, fecha, orden de producción, tipo de material, cantidad, valor unitario y total.')
        .col-lg-5.col-md-10(data-aos='fade-left')
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Formato de requisición de materiales para construcción
          figure
            img.w-75(src='@/assets/curso/temas/t1/fig2.png', alt='Formulario de requisición de materiales para construcción con campos para información de la empresa, número de requisición, fecha, datos del solicitante, materiales solicitados, cantidades y costos.')

      .subt-2.px-5.py-1.mb-4(data-aos='fade')
        h4.mb-0 Orden de Compra o Pedido

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-md-2.col-4.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/3.svg', alt='')
        .col-lg-11.col-md-10(data-aos="fade-left")
          p.mb-0 La orden de compra o pedido es el documento mediante el cual una empresa solicita materiales o mercancías a sus proveedores para satisfacer una necesidad específica. Este documento debe contener, como mínimo, la siguiente información:
      
      .row.align-items-center.justify-content-center.mb-5(data-aos='fade-down')
        .col-lg-8.bg3.mb-4.mb-lg-0
          ul.lista-ul--color.fa-lista.p-4.mb-0
            li.mb-1 
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Fecha:] día en que se realiza la solicitud del pedido.
            li.mb-1 
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Datos comerciales del comprador:] nombre o razón social de la empresa, solicitante, NIT o RUT, dirección, teléfono y nombre de la persona responsable de la solicitud.
            li.mb-1 
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Datos comerciales del proveedor:] nombre o razón social del proveedor, NIT o RUT, dirección, teléfono y nombre de la persona encargada de recibir la solicitud y gestionar el proceso.
            li.mb-1 
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Especificaciones:] detalle del producto, incluyendo tipo, unidad de empaque o presentación, cantidad solicitada, valor unitario y valor total.
            li.mb-1 
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Condiciones comerciales:] plazos y condiciones de entrega, forma de pago, plazos de pago y firma autorizada.
            li.mb-0
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Datos adicionales:] lugar de entrega y contactos para coordinar la programación de la entrega, especialmente en caso de que la organización cuente con un proceso planificado para el recibo de mercancía.
        .col-lg-4.col-md-9.bg-white
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Formato orden de compra
          figure
            img(src='@/assets/curso/temas/t1/fig3.png', alt='Formulario de requisición de materiales para construcción con campos para información de la empresa, número de requisición, fecha, datos del solicitante, materiales solicitados, cantidades y costos.')

      .subt-2.px-5.py-1.mb-4(data-aos='fade')
        h4.mb-0 Factura comercial

      .row.justify-content-center.mb-4.mb-lg-5
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/5.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p La factura comercial es un documento contable emitido por el vendedor en el momento de la adquisición de la mercancía, aunque no existe un formato obligatorio específico, cada empresa tiene la libertad de diseñarla según sus necesidades, siempre y cuando incluya ciertos datos esenciales, entre ellos se destacan: la fecha de la operación comercial y la fecha de vencimiento del pago; el número de la orden de compra, que permite controlar y registrar la transacción; los datos comerciales tanto del vendedor como del comprador, que incluyen nombre o razón social, NIT o RUT, dirección y teléfono; la información detallada de los productos, que incluye descripción, referencia o código interno, cantidad solicitada, valor unitario y total; la forma y condiciones de pago, especificando si el pago es en efectivo, a crédito o contra entrega; y la forma de entrega, que puede ser en las instalaciones del cliente, recogida por el cliente o envío por mensajería o transportadora. 
          .row.justify-content-center.align-items-center
            .col-lg-9
              p También es obligatorio incluir el valor del impuesto sobre las ventas (IVA), con una casilla correspondiente para determinar dicho valor. En Colombia, además, es necesario que la numeración de la factura esté autorizada por la DIAN (Dirección de Impuestos y Aduanas Nacionales), por último, debe figurar el nombre o razón social y NIT de la persona que emite la factura, así como la indicación sobre la calidad de retenedor del impuesto sobre las ventas, si corresponde.
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/6.svg', alt='')

      .row.justify-content-evenly.mb-5
        .col-lg-4.col-md-8.mb-4.mb-lg-0(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span Factura comercial
          figure
            img(src='@/assets/curso/temas/t1/fig4.png', alt='Factura comercial con detalles de la compra, incluyendo descripción de los artículos, cantidades, precios unitarios e importes.')
        .col-lg-4.col-md-8(data-aos='fade-left')
          .titulo-sexto.color-acento-contenido.mb-0.mb-lg-2
            h5 Figura 5.
            span Modelo de factura comercial
          figure
            img(src='@/assets/curso/temas/t1/fig5.png', alt='Modelo de factura comercial con campos para información de la empresa, cliente, descripción de productos, precios y totales.')

      .subt-2.px-5.py-1.mb-4(data-aos='fade')
        h4.mb-0 Remisión

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-md-2.col-4.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/3.svg', alt='')
        .col-lg-11.col-md-10(data-aos="fade-left")
          p.mb-0 La remisión es un documento utilizado para entregar mercancía de forma parcial y sirve como constancia cuando se solicitan entregas fraccionadas de productos, la persona o empresa encargada de entregar la mercancía debe asegurarse de que el receptor firme el documento para que tenga validez, de lo contrario, no será considerado como parte del registro de la entrega.

      .bg3.p-4.mb-4(data-aos='fade-down')
        .row.justify-content-center
          .col-lg-5
            p.fw-bold La remisión o nota de remisión debe incluir la siguiente información en el caso de ser una entrega interna:
            ul.lista-ul--color.fa-lista
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Fecha de entrega:] fecha en la que se realiza la entrega de la mercancía.
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Área que entrega:] nombre de la persona o área responsable de la entrega.
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Área que recibe:] nombre de la persona o área que recibe la mercancía.
              li.mb-0 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Referencia y cantidad de producto entregado:] detalle específico de los productos entregados, con sus respectivas cantidades.
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/7.svg', alt='')
          .col-lg-4
            p.fw-bold Si es externa:
            ul.lista-ul--color.fa-lista
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Datos del proveedor:] nombre de la empresa y NIT. 
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Datos del cliente:] nombre de la empresa y NIT.
              li.mb-1 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Información:] referencia del producto y cantidad.
              li.mb-0 
                i.fas.fa-map-marker-alt
                span.mb-0 #[b Fecha de entrega del producto.] 
            p.mb-0 No es obligatorio que el documento incluya el logo de la empresa; la decisión de utilizar formatos específicos queda a criterio de la empresa, lo fundamental es que, durante la negociación, se establezcan claramente las condiciones de entrega y que el documento cuente con las firmas y sellos correspondientes para que sea válido.

      .row.justify-content-evenly.mb-5
        .col-lg-4.col-md-8.mb-4.mb-lg-0(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
            h5 Figura 6.
            span Orden de remisión
          figure
            img(src='@/assets/curso/temas/t1/fig6.png', alt='Formulario de orden de remisión con campos para información del remitente, destinatario, descripción de los artículos y firmas.')
        .col-lg-4.col-md-8(data-aos='fade-left')
          .titulo-sexto.color-acento-contenido.mb-0
            h5 Figura 7.
            span Nota de remisión
          figure
            img(src='@/assets/curso/temas/t1/fig7.png', alt='Formulario de nota de remisión duplicado con campos para información del remitente, destinatario, descripción de los artículos, precios y firmas.')

      .subt-2.px-5.py-1.mb-4(data-aos='fade')
        h4.mb-0 Listado de #[em Picking]
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-md-2.col-4.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/3.svg', alt='')
        .col-lg-11.col-md-10(data-aos="fade-left")
          p.mb-0 El #[em picking] es el proceso de selección y preparación de las unidades que serán despachadas, el listado de picking es un documento que detalla las ubicaciones y las cantidades de las referencias que deben ser alistadas para su posterior despacho, una vez que se cuenta con este listado, se procede a recoger los productos para trasladarlos a la zona de consolidación.

      .row.d-flex.mb-5(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          .bg-sub.h-100.align-items-center.d-flex
            img(src='@/assets/curso/temas/t1/8.png', alt='')
        .col-lg-4.ps-lg-0.mb-4.mb-lg-0
          .bg3.h-100
            ul.lista-ul--color.color-primario.fa-lista.p-3.p-lg-4.mb-0
              li.mb-1
                i.fas.fa-map-marker-alt
                span.mb-0 Permite automatizar o sistematizar los procesos de alistamiento, mejorando la eficiencia.
              li.mb-1
                i.fas.fa-map-marker-alt
                span.mb-0 Reduce los costos de alistamiento y, en general, los costos logísticos, optimizando los recursos.
              li.mb-1
                i.fas.fa-map-marker-alt
                span.mb-0 Minimiza los errores en los inventarios, ya que, con el uso de herramientas tecnológicas, al retirar un producto del almacenamiento se actualiza automáticamente el inventario.
              li.mb-0
                i.fas.fa-map-marker-alt
                span.mb-0 Facilita el alistamiento de pedidos realizados a través de internet, optimizando el proceso de preparación y despacho.
        .col-lg-4.col-md-8
          .bg-white.h-100
            .titulo-sexto.color-acento-contenido.mb-1
              h5 Figura 8.
              span Listado de #[em Picking]
            figure
              img(src='@/assets/curso/temas/t1/fig8.png', alt='Listado de picking con detalles de ubicación, artículos, descripciones, lotes, cantidades y bultos.')


      .subt-2.px-5.py-1.mb-4(data-aos='fade')
        h4.mb-0 Registro de devolución
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-md-2.col-4.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/3.svg', alt='')
        .col-lg-11.col-md-10(data-aos="fade-left")
          p.mb-0 El registro de devolución es el proceso mediante el cual se documenta la información relacionada con las mercancías que los clientes devuelven, este registro debe ir acompañado de un informe detallado que explique las razones por las cuales se realiza la devolución de los productos. El proceso de registro se lleva a cabo de la siguiente manera:

      .row.justify-content-center.mb-5
        .col-lg-9(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido")
            .row.justify-content-center(titulo="Crear una orden de devolución")
              .col-lg-11
                p Al generar esta orden, la persona encargada de recibir la mercancía permite que se actualice el inventario, reflejando el ingreso del producto, sin embargo, el artículo se mantiene inhabilitado hasta que el departamento de calidad revise las razones de la devolución.
            .row.justify-content-center(titulo="Dejar una nota adicional")
              .col-lg-11
                p En la orden debe indicarse que, dependiendo de lo acordado en la negociación, se debe restituir el dinero al cliente (si pagó previamente) o cambiar el producto si así lo prefiere.
            .row.justify-content-center(titulo="Entregar el documento soporte de la devolución")
              .col-lg-11
                p Se debe proporcionar al cliente el documento que respalda la devolución, asegurando la validez del proceso.
            .row.justify-content-center(titulo="Realizar un análisis de las mercancías devueltas")
              .col-lg-11
                p El departamento de calidad debe llevar a cabo un análisis detallado de los productos devueltos para determinar el proceso a seguir, ya sea de reposición, reparación o disposición.
            .row.justify-content-center(titulo="Liquidar la devolución")
              .col-lg-11
                p una vez completados los pasos anteriores, se procede a realizar la liquidación de la devolución, asegurando que todo esté debidamente registrado y procesado.
        .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/9.png', alt='')

      .row.justify-content-center.mb-5(data-aos="fade-down")
        .col-lg-10
          .bg1.tarjeta.p-4
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 9. 
                  span Devoluciones de compra 
                figure
                  img(src='@/assets/curso/temas/t1/fig9.png', alt='Informe de devoluciones de compra con detalles de proveedores, obras, artículos, cantidades y montos.')  
              .col-lg-6
                img.w-90.mb-2.d-none.d-lg-block(src='@/assets/curso/temas/t1/10.svg', alt='')
                p La devolución de mercancías es un proceso que requiere gran cuidado y precisión, y es responsabilidad de quien la recibe; un error en este proceso puede generar inconvenientes en el inventario y, aún más grave, errores contables que alteren los estados financieros de la empresa.


      .subt-2.px-5.py-1.mb-4(data-aos='fade')
        h4.mb-0 Orden de salida

      .row.justify-content-center.mb-4
        .col-lg-8(data-aos="fade-right")
          .row.justify-content-center.align-items-center.mb-3.mb-lg-2
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.m-auto.w-75(src='@/assets/curso/temas/t1/11.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 Documento que permite el registro de la salida de la mercancía que va a ser despachada ya sea interna o externamente. La información que hace parte de la orden de salida es:
          ul.lista-ul--color.color-primario.fa-lista.mb-0
            li.mb-1
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Identificación de la empresa:] nombre o razón social, NIT o RUT.
            li.mb-1
              i.fas.fa-map-marker-alt
              span.mb-0 Fecha en la cual se realiza la salida.
            li.mb-1
              i.fas.fa-map-marker-alt
              span.mb-0 Descripción del producto, código, unidad de medida, cantidad, valor unitario y valor total.
            li.mb-1
              i.fas.fa-map-marker-alt
              span.mb-0 #[b Identificación del cliente:] nombre o razón social, NIT o RUT.
            li.mb-1
              i.fas.fa-map-marker-alt
              span.mb-0 Identificación de quien recibe y entrega el objeto.
            li.mb-1
              i.fas.fa-map-marker-alt
              span.mb-0 La orden de salida debe tener un número consecutivo.
            li.mb-0
              i.fas.fa-map-marker-alt
              span.mb-0 Observaciones generales.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/12.png', alt='')

      .row.justify-content-evenly.mb-5
        .col-lg-4.col-md-8(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
            h5 Figura 10.
            span Formato orden de despacho
          figure
            img(src='@/assets/curso/temas/t1/fig10.png', alt='Orden de despacho de la empresa de transportes Segucar S.A. con detalles del destinatario, artículos despachados y datos del transportista.')
        .col-lg-5.col-md-9(data-aos='fade-left')
          .titulo-sexto.color-acento-contenido.mb-0
            h5 Figura 11.
            span Orden de salida 
          figure
            img(src='@/assets/curso/temas/t1/fig11.png', alt='Orden de salida de material con detalles del solicitante, destinatario, descripción del material y cantidades.')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
