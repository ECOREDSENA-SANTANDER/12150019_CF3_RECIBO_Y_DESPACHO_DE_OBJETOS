export default {
  global: {
    Name: 'Exploración de movimientos de mercancías: ingreso y salida',
    Description:
      'Los registros de ingreso y salida de mercancías son fundamentales para la programación de despachos, la solicitud de productos y la gestión de inventarios, estos registros, ya sean manuales o digitales, deben seguir un procedimiento establecido y ser confiables, ya que sirven como base para negociaciones comerciales. Para realizar un registro adecuado, es necesario contar con documentos que proporcionen la información completa para su correcta diligencia y procesamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Documentación, recibo y despacho de objetos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Políticas de ingreso y salida de objetos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Registro de ingreso y salida',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_12150019_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Diseño del sistema de gestión por procesos para la empresa diseño, ingeniería, automatización y control Dinacol S.A.S. ',
      referencia:
        'Pineda, G. R., & Burbano Ortiz, A. M. (2018). Diseño del sistema de gestión por procesos para la empresa Diseño, Ingeniería, Automatización y Control Dinacol S.A.S. [Archivo PDF]. Universidad del Valle.  ',
      tipo: 'PDF',
      link:
        'https://bibliotecadigital.univalle.edu.co/server/api/core/bitstreams/f7b65f9f-8715-4d42-8205-a560ba01cb54/content',
    },
    {
      tema:
        'Todo lo que debes saber de la logística de entregas y sus procesos. ',
      referencia:
        'Lo que debes saber de la logística de entregas y sus procesos. (2022, 29 marzo). QuadMinds. ',
      tipo: 'Blog',
      link: 'https://www.quadminds.com/blog/logistica-de-entregas/',
    },
    {
      tema: 'Recibo y despacho mercancías panamericana.wmv.',
      referencia:
        'Nasly Yuranny. (2012, 17 noviembre). Recibo y despacho mercancías panamericana.wmv.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YbhPkUFcyg4',
    },
  ],
  glosario: [
    {
      termino: 'Cantidad',
      significado:
        'número o volumen de unidades de un producto u objeto solicitado, adquirido o registrado. En la requisición o en los inventarios, la cantidad específica cuántas unidades de un artículo se requieren o se tienen disponibles. ',
    },
    {
      termino: 'Control',
      significado:
        'acción de supervisar, verificar y gestionar los procesos o movimientos de productos, mercancías o actividades dentro de una organización.  ',
    },
    {
      termino: 'Datos',
      significado:
        'conjunto de hechos, cifras o información que se recopilan y se utilizan para un propósito específico. ',
    },
    {
      termino: 'Diligenciamiento',
      significado:
        'acción de completar correctamente los documentos necesarios para los procesos de recibo y despacho. ',
    },
    {
      termino: 'Condiciones',
      significado:
        'términos establecidos entre las partes, como precio, plazo de entrega, y forma de pago, que deben quedar claros en el acuerdo. ',
    },
    {
      termino: 'Devoluciones',
      significado:
        'proceso mediante el cual un cliente regresa un producto adquirido, generalmente debido a insatisfacción o error en la compra. ',
    },
    {
      termino: 'Documentación',
      significado:
        'conjunto de documentos utilizados para registrar los movimientos de mercancías en los procesos de recepción y despacho. ',
    },
    {
      termino: 'Factura',
      significado:
        'documento que detalla la venta de productos o servicios, incluyendo cantidades, precios y condiciones de pago. Es un documento clave para el registro de transacciones comerciales. ',
    },
    {
      termino: 'Fecha',
      significado:
        'día en que se realiza una solicitud o un movimiento de mercancías.',
    },
    {
      termino: 'Inventario',
      significado:
        'registro detallado de los bienes y productos disponibles en una organización, utilizado para llevar un control de existencias y gestionar reabastecimientos. ',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'proceso de controlar y actualizar el inventario de productos dentro de la organización. ',
    },
    {
      termino: 'Movimiento de mercancías',
      significado:
        'acción de ingresar o sacar productos de un almacén o inventario. ',
    },
    {
      termino: 'Requisición',
      significado:
        'documento interno utilizado para solicitar productos, materiales o la transferencia de mercancías dentro de la empresa. ',
    },
    {
      termino: 'Solicitante',
      significado:
        'persona o departamento que realiza una requisición para solicitar productos u objetos dentro de la organización. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Monforte, E. (2024, 16 julio). Tipos de factura: en qué se diferencian, clasificación y ejemplos. Camerfirma.  ',
      link:
        'https://www.camerfirma.com/tipos-de-factura-en-que-se-diferencian-clasificacion-y-ejemplos/',
    },
    {
      referencia: 'Definición de nota de remisión. (s. f.). Significado.com.  ',
      link: 'https://significado.com/nota-de-remision/',
    },
    {
      referencia:
        'SODIMAC COLOMBIA. (2021). Manual de entrega de Mercancía Sodimac.',
      link:
        'https://www.homecenter.com.co/static/landing/footer/docs/manual-recibo-de-mercancia-integral-Sodimac-2020.pdf',
    },
    {
      referencia:
        'Gestiopolis, E. (2002). ¿Qué es una orden de compra? Gestiopolis.com. ',
      link: 'https://www.gestiopolis.com/que-es-una-orden-de-compra/',
    },
    {
      referencia:
        'Pazan Toledo, T. M. (2015). Diseño de modelo de reingeniería al control de inventario y manejo de bodega aplicado a la Corporación Farmasocio. Tesis, Universidad del Azuay, Ecuador. Recuperado el 27 de noviembre de 2016 en ',
      link: 'http://dspace.uazuay.edu.ec/bitstream/datos/5026/1/11465.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ingrid Criollo García',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Luisa Patricia Juvinao',
          cargo: 'Equipo de diseño curricular',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
