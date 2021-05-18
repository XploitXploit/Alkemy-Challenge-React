

function CalcularSumatoriaStats(heroes){
    var int = 0
    var str = 0
    var spd = 0
    var drb = 0
    var pwr = 0
    var cmb = 0
    var pesoTotal=0
    var alturaTotal=0



    heroes.forEach(element => {
       int += element.powerstats.intelligence === 'null' ? 0 : parseInt(element.powerstats.intelligence)
       str += element.powerstats.strength==='null' ? 0 : parseInt(element.powerstats.strength)
       spd += element.powerstats.speed==='null' ? 0 : parseInt(element.powerstats.speed)
       drb += element.powerstats.durability==='null' ? 0 : parseInt(element.powerstats.durability)
       pwr += element.powerstats.power==='null' ? 0 : parseInt(element.powerstats.power)
       cmb += element.powerstats.combat==='null' ? 0 : parseInt(element.powerstats.combat)
       
       pesoTotal += element.appearance.weight[1].split(' ')[0] === 'null' ? 0 : 
                                                                parseInt(element.appearance.weight[1].split(' ')[0])
       alturaTotal += element.appearance.height[1].split(' ')[0] === 'null' ? 0 :
                                                                    parseInt(element.appearance.height[1].split(' ')[0])                                                         
       
    });

    var pesoPromedio = pesoTotal/heroes.length
    var alturaPromedio = alturaTotal/heroes.length

    var PowerStats = {intelligence: int,strength: str,speed: spd,durability:drb,
                        power:pwr,combat:cmb, }
    
    var promedios = {pesoPromedio: pesoPromedio, alturaPromedio: alturaPromedio}
    
    return [PowerStats,promedios]
    
}

export default CalcularSumatoriaStats