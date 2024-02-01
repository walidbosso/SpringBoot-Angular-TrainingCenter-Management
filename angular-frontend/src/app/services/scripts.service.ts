import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  
  constructor() { }

   loadScripts() {
    const dynamicScripts = [
        'assets/plugins/global/plugins.bundle.js',
        'assets/js/scripts.bundle.js'
    ];

    // Remove existing script elements
    // const existingScripts = document.querySelectorAll('script');
    // existingScripts.forEach(script => {
    //     script.remove();
    // });

    // Load new scripts
    for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}

}
