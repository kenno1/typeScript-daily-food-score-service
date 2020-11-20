(()=>{"use strict";class e{constructor(){}get totalScore(){return n.getInstance().activeElementsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}static getInstance(){return e.instance||(e.instance=new e),e.instance}}class t{constructor(e){this.element=e,e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){this.element.classList.toggle("food--active"),e.getInstance().render()}}class n{constructor(){this.elements=document.querySelectorAll(".food"),this._activeElements=[],this._activeElementsScore=[],this.elements.forEach((e=>{new t(e)}))}get activeElements(){return this._activeElements=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeElements.push(e)})),this._activeElements}get activeElementsScore(){return this._activeElementsScore=[],this.activeElements.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElementsScore.push(Number(t.textContent))})),this._activeElementsScore}static getInstance(){return n.instance||(n.instance=new n),n.instance}}n.getInstance()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm80X3R5cGVTY3JpcHRfYXBwLy4vZGlzdC9zY3JvcmUuanMiLCJ3ZWJwYWNrOi8vcHJvNF90eXBlU2NyaXB0X2FwcC8uL2Rpc3QvZm9vZC5qcyIsIndlYnBhY2s6Ly9wcm80X3R5cGVTY3JpcHRfYXBwLy4vZGlzdC9mb29kcy5qcyIsIndlYnBhY2s6Ly9wcm80X3R5cGVTY3JpcHRfYXBwLy4vZGlzdC9tYWluLmpzIl0sIm5hbWVzIjpbIlNjb3JlIiwiRm9vZHMiLCJnZXRJbnN0YW5jZSIsImFjdGl2ZUVsZW1lbnRzU2NvcmUiLCJyZWR1Y2UiLCJ0b3RhbCIsInNjb3JlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJTdHJpbmciLCJ0aGlzIiwidG90YWxTY29yZSIsImluc3RhbmNlIiwiRm9vZCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tFdmVudEhhbmRsZXIiLCJiaW5kIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVuZGVyIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2FjdGl2ZUVsZW1lbnRzIiwiX2FjdGl2ZUVsZW1lbnRzU2NvcmUiLCJmb3JFYWNoIiwiY29udGFpbnMiLCJwdXNoIiwiYWN0aXZlRWxlbWVudHMiLCJmb29kU2NvcmUiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiJtQkFDTyxNQUFNQSxFQUNULGVBQ0EsaUJBRUksT0FEY0MsRUFBTUMsY0FDUEMsb0JBQW9CQyxRQUFPLENBQUNDLEVBQU9DLElBQVVELEVBQVFDLEdBQU8sR0FFN0UsU0FDSUMsU0FBU0MsY0FBYyxrQkFBa0JDLFlBQWNDLE9BQU9DLEtBQUtDLFlBR3ZFLHFCQUlJLE9BSEtaLEVBQU1hLFdBQ1BiLEVBQU1hLFNBQVcsSUFBSWIsR0FFbEJBLEVBQU1hLFVDZGQsTUFBTUMsRUFDVCxZQUFZQyxHQUNSSixLQUFLSSxRQUFVQSxFQUNmQSxFQUFRQyxpQkFBaUIsUUFBU0wsS0FBS00sa0JBQWtCQyxLQUFLUCxPQUVsRSxvQkFDSUEsS0FBS0ksUUFBUUksVUFBVUMsT0FBTyxnQkFDaEJwQixFQUFNRSxjQUNkbUIsVUNSUCxNQUFNcEIsRUFDVCxjQUNJVSxLQUFLVyxTQUFXZixTQUFTZ0IsaUJBQWlCLFNBQzFDWixLQUFLYSxnQkFBa0IsR0FDdkJiLEtBQUtjLHFCQUF1QixHQUM1QmQsS0FBS1csU0FBU0ksU0FBUVgsSUFDbEIsSUFBSUQsRUFBS0MsTUFHakIscUJBT0ksT0FOQUosS0FBS2EsZ0JBQWtCLEdBQ3ZCYixLQUFLVyxTQUFTSSxTQUFRWCxJQUNkQSxFQUFRSSxVQUFVUSxTQUFTLGlCQUMzQmhCLEtBQUthLGdCQUFnQkksS0FBS2IsTUFHM0JKLEtBQUthLGdCQUVoQiwwQkFRSSxPQVBBYixLQUFLYyxxQkFBdUIsR0FDNUJkLEtBQUtrQixlQUFlSCxTQUFRWCxJQUN4QixNQUFNZSxFQUFZZixFQUFRUCxjQUFjLGdCQUNwQ3NCLEdBQ0FuQixLQUFLYyxxQkFBcUJHLEtBQUtHLE9BQU9ELEVBQVVyQixpQkFHakRFLEtBQUtjLHFCQUVoQixxQkFJSSxPQUhLeEIsRUFBTVksV0FDUFosRUFBTVksU0FBVyxJQUFJWixHQUVsQkEsRUFBTVksVUNoQ3JCWixFQUFNQyxlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvb2RzIH0gZnJvbSBcIi4vZm9vZHMuanNcIjtcclxuZXhwb3J0IGNsYXNzIFNjb3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBnZXQgdG90YWxTY29yZSgpIHtcclxuICAgICAgICBjb25zdCBmb29kcyA9IEZvb2RzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGZvb2RzLmFjdGl2ZUVsZW1lbnRzU2NvcmUucmVkdWNlKCh0b3RhbCwgc2NvcmUpID0+IHRvdGFsICsgc2NvcmUsIDApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9fbnVtYmVyJykudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcclxuICAgIH1cclxuICAgIC8vc2luZ2xldG9uIGNsYXNzXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFTY29yZS5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBTY29yZS5pbnN0YW5jZSA9IG5ldyBTY29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2NvcmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NvcmUgfSBmcm9tIFwiLi9zY3JvcmUuanNcIjtcclxuZXhwb3J0IGNsYXNzIEZvb2Qge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBjbGlja0V2ZW50SGFuZGxlcigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9vZC0tYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBTY29yZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHNjb3JlLnJlbmRlcigpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZvb2QgfSBmcm9tIFwiLi9mb29kLmpzXCI7XHJcbmV4cG9ydCBjbGFzcyBGb29kcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb2QnKTtcclxuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBGb29kKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb2QtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9vZFNjb3JlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vZF9fc2NvcmUnKTtcclxuICAgICAgICAgICAgaWYgKGZvb2RTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZS5wdXNoKE51bWJlcihmb29kU2NvcmUudGV4dENvbnRlbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghRm9vZHMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgRm9vZHMuaW5zdGFuY2UgPSBuZXcgRm9vZHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEZvb2RzLmluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZvb2RzIH0gZnJvbSBcIi4vZm9vZHMuanNcIjtcclxuRm9vZHMuZ2V0SW5zdGFuY2UoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==