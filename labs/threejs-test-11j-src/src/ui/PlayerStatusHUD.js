export class PlayerStatusHUD{
  constructor(container){
    this.root=document.createElement('section');
    this.root.className='player-status';
    this.root.innerHTML='<div class="player-status-row"><strong>PLAYER</strong><span data-hp>100 / 100</span><b data-state>READY</b></div><div class="player-hp-track"><i data-bar></i></div><b class="respawn-prompt" data-respawn-prompt hidden>RESPAWN AVAILABLE · PRESS R</b>';
    container.appendChild(this.root);
    this.hp=this.root.querySelector('[data-hp]');
    this.state=this.root.querySelector('[data-state]');
    this.bar=this.root.querySelector('[data-bar]');
    this.respawnPrompt=this.root.querySelector('[data-respawn-prompt]');
  }

  update(snapshot){
    const pct=snapshot.maxHealth?Math.max(0,Math.min(1,snapshot.health/snapshot.maxHealth)):0;
    this.hp.textContent=snapshot.health+' / '+snapshot.maxHealth;
    this.state.textContent=snapshot.status;
    this.bar.style.transform='scaleX('+pct+')';
    this.root.dataset.state=snapshot.status;
    this.respawnPrompt.hidden=snapshot.respawnState!=='RESPAWN_AVAILABLE';
  }

  dispose(){this.root.remove();}
}
