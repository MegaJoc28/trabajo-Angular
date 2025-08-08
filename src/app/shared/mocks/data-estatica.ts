
import {  Producto } from '../producto.interface';

export const INVENTARIO_DATA: Producto[] = [
    {id: 1, nombre: 'Laptop', precio: 499990, cantidad: 8, categoria: 'Computacion', activo: true},
    {id: 2, nombre: 'Gabinete', precio: 59990, cantidad: 15, categoria: 'Hardware', activo: true},
    {id: 3, nombre: 'Tarjeta de video', precio: 699990, cantidad: 5, categoria: 'Hardware', activo: true},
    {id: 4, nombre: 'Monitor', precio: 199990, cantidad: 10, categoria: 'Computacion', activo: false },
    {id: 5, nombre: 'Teclado', precio: 29990, cantidad: 20, categoria: 'Perifericos', activo: true},
    {id: 6, nombre: 'Placa madre', precio: 89990, cantidad: 12, categoria: 'Hardware', activo: false},
    {id: 6, nombre: 'Memoria RAM', precio: 59990, cantidad: 18, categoria: 'Hardware', activo: true},
    {id: 7, nombre: 'Disco duro', precio: 79990, cantidad: 25, categoria: 'Almacenamiento', activo: false},
    {id: 8, nombre: 'Mouse', precio: 19990, cantidad: 30, categoria: 'Perifericos', activo: true},
]