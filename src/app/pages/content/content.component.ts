import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input()
  photoContent:string = "https://s2-g1.glbimg.com/jfVlBdekH1lJIMU7HEK12dBVNms=/0x0:804x479/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/R/F/Vt2xxQSfyFPIk6RCwMdw/captura-de-tela-2023-08-25-104831.png"
  @Input()
  contentTitle:string = "Meu Artigo"
  @Input()
  contentDescription:string = `A obrigatoriedade da emissão da Nota Fiscal Eletrônica de Serviços (NFS-e) pelos microempreendedores individuais (MEIs) foi adiado pelo Comitê Gestor do Simples Nacional (CGSN). Previsto inicialmente para começar nesta segunda, 3, os MEIs serão obrigados a emitir a nota a partir do dia 1º de setembro.

  Além de promover uma padronização, a NFS-e Nacional resolve o impasse de cidades que não recolhem imposto pela ausência de administração tributária ou recursos tecnológicos.
  
  
  http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=125242

  `

}
