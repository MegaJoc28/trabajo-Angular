import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { Producto } from "../../../shared/producto.interface";
import { INVENTARIO_DATA } from "../../../shared/mocks/data-estatica";
import { ModalConfirm } from "../../../shared/components/modal-confirm/modal-confirm";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-tabla-inventario',
    standalone: true,
    imports: [CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatDialogModule],
    templateUrl: './tabla-inventario.html',
    styleUrls: ['./tabla-inventario.scss']
})
export class TablaInventario implements AfterViewInit {
    rolUsuario: string | null = null;

    columnas: string[] = ['id', 'nombre', 'precio', 'cantidad', 'categoria', 'acciones'];
    dataSource = new MatTableDataSource<Producto>(INVENTARIO_DATA);
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private dialog: MatDialog) {
        this.rolUsuario = localStorage.getItem('rolUsuario');
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    eliminarProducto(productoId: number): void {
        const dialogRef = this.dialog.open(ModalConfirm, {
            data: { mensaje: '¿Estás seguro de que deseas eliminar este producto?', btnNombre: 'Eliminar' },
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource.data = this.dataSource.data.filter(p => p.id !== productoId);
            }
        });
    }

    vaciarInventario(): void {
        const dialogRef = this.dialog.open(ModalConfirm, {
            data: { mensaje: '¿Estás seguro de que deseas vaciar el inventario?', btnNombre: 'Vaciar' },
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource.data = [];
            }
        });
    }
}
