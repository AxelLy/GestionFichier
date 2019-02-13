import m from "mithril"
import List from "C:/Users/Dimi/Documents/GitHub/GestionFichier/myapp/src/list.js"
import Chart from "C:/Users/Dimi/Documents/GitHub/GestionFichier/myapp/src/chart.js"
List.loadList()
Chart.loadList()
m.mount(document.body,List)