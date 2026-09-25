export class ResourceTracker {
  #resources = new Set();

  own(resource) {
    if (resource?.dispose) this.#resources.add(resource);
    return resource;
  }

  forget(resource) {
    this.#resources.delete(resource);
  }

  dispose() {
    for (const resource of this.#resources) {
      try { resource.dispose(); } catch {}
    }
    this.#resources.clear();
  }

  get count() { return this.#resources.size; }
}
