import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { Producto } from "../../../shared/producto.interface";
import { INVENTARIO_DATA } from "../../../shared/mocks/data-estatica";

@Component({
    selector: 'app-tabla-inventario',
    standalone: true,
    imports: [CommonModule, MatTableModule, MatPaginatorModule],
    templateUrl: './tabla-inventario.html',
    styleUrls: ['./tabla-inventario.scss']
})
export class TablaInventario implements AfterViewInit{
    columnas: string[] = ['id', 'nombre', 'precio', 'cantidad', 'categoria'];
    dataSource = new MatTableDataSource<Producto>(INVENTARIO_DATA);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}