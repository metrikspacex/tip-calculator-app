import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { RootModule } from "./app/root.module";

platformBrowserDynamic()
  .bootstrapModule(RootModule, {})
  .catch((error) => console.error(error));
