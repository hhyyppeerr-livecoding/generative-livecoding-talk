# sonic pi

## Comandos básicos

Alt + r, ejecuta el codigo

Alt + s, parar el codigo

## print

Imprime en consola un valor, variable, array…

```ruby
print "hola mundo"
print 808
```

## play

play reproduce una nota, por defecto sonic pi carga el sintetizador “beep”, recuerda pulsar Alt+s para detener la ejecución:

```ruby
play 60
```

## sleep

sleep sirve para esperar una cantidad de beats determinada:

```ruby
play 50
sleep 1
play 58
sleep 1
play 53
sleep 1
```

## Variables

Podemos crear variables para tener mas control sobre nuestro codigo, ahora puedes cambiar la variable time y note para crear una secuencia de notas.

```ruby
time = 0.5
note = 50

play note
sleep time
play note+3
sleep time
play note+7
sleep time

```

Fijate en como creamos nuevas notas simplemente sumando (o restando) valores a nuestra nota inicial, intenta cambiar las dos ultimas notas por otras dos variables, prueba tambien a cambiar el valor de la suma del codigo por variables, dependiendo de que quieras hacer puede ser mas util!

Ademas, podemos disparar varias notas a la vez:

```ruby
use_synth :piano #cargamos el instrumento de piano
play 60, release: 0.3 #el comando release controla la duracion del sonido
play 60+3, release: 0.3
play 60+7, release: 0.3
play 60+10, release: 0.3
sleep 1

play 58, release: 0.3
play 62, release: 0.3
play 60+7, release: 0.3
play 60+10, release: 0.3
sleep 1
```

Unos acordes y un arp:

```ruby
amp = 0.2
play 60, release: 0.3, amp: amp
  play 60+3, release: 0.3, amp: amp
  play 60+7, release: 0.3, amp: amp
  play 60+10, release: 0.3, amp: amp
  sleep 0.5
  
  play 60, release: 0.3, amp: amp
  sleep 0.25
  play 60+3, release: 0.3, amp: amp
  sleep 0.25
  play 60+7, release: 0.3, amp: amp
  sleep 0.25
  
  play 58, release: 0.3, amp: amp
  play 62, release: 0.3, amp: amp
  play 60+7, release: 0.3, amp: amp
  play 60+10, release: 0.3, amp: amp
  sleep 0.5
  
  play 58, release: 0.3, amp: amp
  play 62, release: 0.3, amp: amp
  play 60+7, release: 0.3, amp: amp
  play 60+8, release: 0.3, amp: amp
  sleep 0.25
```

Ademas de usar numeros, sonic pi te deja usar notacion clasica:

```ruby
play :F, release: 0.2
sleep 1
play :Cb, release: 0.2
sleep 1
```

## sample

El comando sample dispara una muestra de audio, sonic pi dispone de varios samples por defecto:

```ruby
sample :bd_klub
sleep 1
sample :bd_klub
sample :drum_snare_soft
sleep 1
```

## live_loop

Podemos crear bucles de melodias y samples:

```ruby
live_loop :kck do
  sample :bd_klub
	sleep 1
	sample :bd_klub
	sample :drum_snare_soft
	sleep 1
end
```

La estructura de un live_loop es:

- live_loop, indicamos a ruby que vamos a hacer un bucle
- :nombre, le damos un nombre a este bucle
- do, marca el inicio de nuestro bucle, todo lo que este entre do y end, se repetira ciclicamente
- end, fin de este bucle

## Sincronizando diferentes loops

Para poder tener sincronizados nuestros loops necesitamos crear un bucle que nos marque un pulso continuo:

```ruby
live_loop :main do
sleep 1
end
```

Cuando hagamos un loop, ahora podemos sincronizarlo a este de la siguiente manera:

```ruby
live_loop :kick, sync: :main do
sample :bd_klub
sleep 1
end
```

## Beat básico

```ruby
use_bpm 120
live_loop :main do
  sleep 1
end

live_loop :kck, sync: :main do
  sample :bd_klub
  sleep 1
end

live_loop :hat, sync: :main do
  sleep 0.5
  sample :drum_cymbal_open, release: 0.1, sustain: 0, amp: 0.2
  sleep 0.5
end

live_loop :snare, sync: :main do
  sleep 1
  sample :drum_snare_soft
  sleep 1
end
```

## Arrays y beats aleatorios

### Arrays

Podemos empezar a hacer melodias aleatorias, vamos a crear un array de notas, un array no es mas que una estructura de datos en la que podemos almacenar cualquier cosa:

```ruby
array = [0,1,2,3,999,:F] #Creamos un array de 6 elementos
print array #imprimimos el array
print array.length #imprimimos la longitud del array
print array[0] #imprimimos el primer elemento
print array[1] #imprimimos el segundo elemento
print array[array.length-1] #imprimimos el ultimo elemento
print array.choose #imprimimos un elemento aleatorio del array
```

Podemos crear un array con varias notas y luego hacer que elija notas al azar y manualmente

```ruby
notes = [:Db4, :Fb5, :Ab4, :Cb5]
time = 0.125
rel = 0.05
live_loop :arp do
  play notes[0], release: rel
  sleep time
  play notes.choose, release: rel
  sleep time
  play notes.choose, release: rel
  sleep time
  play notes[2], release: rel
end
```

## Rings y melodias aleatorias