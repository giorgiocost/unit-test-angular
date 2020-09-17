import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFormat'
})
export class ImageFormatPipe implements PipeTransform {

  transform(imagem: string, caminho = '', substituir: boolean) {
    if (caminho == 'default')
      caminho = 'assets';

    if(imagem.length == 0 && substituir)
      imagem = '/semCapa.jpg';

    return `/${ caminho }/${ imagem }`;
  }
}
