# 🖱️ Contador de Clics - A Pedido Especial de Mi Hijo 🖱️

Este es un contador de clics diseñado a pedido especial de mi hijo. El proyecto permite contar clics con algunas características adicionales y fue desarrollado utilizando **React Vite**. A medida que se alcanzan ciertos hitos en el contador, el juego se vuelve más interactivo y desafiante.

## ✨ Funcionalidades

- **Contador de clics**: El contador incrementa y muestra el número total de clics realizados.
- **Cartas de la Fortuna** 🎴: Al inicio, solo hay una carta disponible. Cada 50 clics, se desbloquea una carta adicional hasta un máximo de tres cartas. Las cartas permiten ganar o perder puntos de manera aleatoria.
- **Temporizador** ⏲️: Existen tres modos de juego:
  - ⚡ **Juego rápido**: 1 minuto.
  - 🕒 **Juego medio**: 3 minutos.
  - ⏳ **Juego largo**: 5 minutos.
- **Fin del juego** 🚫: Una vez que el temporizador se agota, el juego se detiene y no se pueden realizar más clics. Aparece un mensaje mostrando el número total de clics.
- **Reinicio del juego** 🔄: El jugador puede reiniciar el contador en cualquier momento utilizando el botón de reinicio con un ícono.

## 🛠️ Tecnologías utilizadas

- **React Vite**
- **CSS modular**
- **React Icons**: Para los íconos de reinicio.
- **State management**: Se manejan los estados de las cartas, el contador y el temporizador usando `useState` y `useEffect`.

## ⚙️ Cómo funciona

1. Al iniciar, puedes elegir la duración del juego (1, 3 o 5 minutos).
2. Comienza a hacer clic, y cada 50 clics se desbloquea una nueva carta que puede aumentar o disminuir el número total de clics.
3. El temporizador cuenta el tiempo restante. Cuando se agota, el juego se detiene y muestra un mensaje con la cantidad de clics realizados.
4. Puedes reiniciar el juego en cualquier momento presionando el botón de reinicio en la esquina superior derecha.

## 🚀 Instalación

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina:

```bash
git clone https://github.com/gabybot/contacCick.git
