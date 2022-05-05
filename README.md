# Componentes para crear un e-commerce.

El objetivo de este trabajo es generar las bases para un e-commerce que se pueda adaptar a la carga de listado de productos de cada caso. Con dicho fin se generaron distintos componentes individuales que al sumarse generan una app funcional. Del mismo modo esos componentes individuales aseguran que cualquiera que trabaje con los mismos pueda ponerle su impronta propia.

## Descargar la App

Descargar el repositorio de (https://github.com/Luis-Larrang/fernandez-ecommerce-jsreact.git) y utilizar el comando de consola "npm start" para correr la App.

### Prerrequisitos

Requirements for the software and other tools to build, test and push 
- [React](https://www.example.com)
- [Bootstrap-react](https://es.reactjs.org/)
- [react-router-dom.](https://reactrouter.com/)

### Instalación

Para poder hacer uso y modificaciones en la App es necesario:

#### Instalar la dependencia react.

  Utilizar la consola e ingresar el siguiente comando: npx create-react-app my-app

#### Instalar la dependencia Bootstrap-react.

  Utilizar la consola e ingresar el siguiente comando: npm install react-bootstrap bootstrap

#### Instalar dependencia react-router-dom.

  Utilizar la consola e ingresar el siguiente comando: npm install react-router-dom

## Correr la App.

Una vez todas las dependecnias esten instaladas es posible iniciar la App mediante el comando de consola: npm start.

## Detalle de los componentes y su funcionalidad.

  ### Navbar.

    En el componente NavBar se utilizó css ya que la dependencia de bootstrap generó un conflicto con la dependencia de react-router-dom, la que no permitía hacer modificaciones estéticas sobre los <NavLinks>. Esto está sujeto a revisión y puede ser modificado en futuras iteraciones.

  ### Item, Item detail, Item list.

    Dentro de estos componentes se utilizó la dependencia Bootstrap para lograr agilizar el proceso de diseño y simplificar modificaciones requeridas según los items a reflejar en la App.

  ### Item list container e Item detail container.

    Dentro de los componentes “ItemListContainer” e “ItemDetailContainer” se trabajó utilizando la función “getProducts()” y “getItem()” con promesas y filtros los cuales son usados por la función “ItemListContainer()” e “ItemDetailContainer()”, que incluyen la función useState de react, para poder reflejar los items deseados en el dom. En el primer caso utilizando “category” como referencia y en el segundo “id”.

## Autor

  - **Luis Fernandez** - *Desarrollo integral de la App* -
    [Luis-Larrang](https://github.com/Luis-Larrang)

## Licencia

Trabajo de indole educativo: uso libre.

## Agradecimeintos

  - Diego Medina [Profesor]
  - Ailin Nakaganeku [Tutora]