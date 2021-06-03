# Memory Consumer
Library made just to consume memory.

### why?
* Testing high memory usage cases.
* Consume memory.

## Usage
Basic usage:

```javascript
const MemoryConsumer = require('memory-consumer');

const consumer = new MemoryConsumer();

consumer.fillMemoryMb(500); //consume approx 500mb
consumer.fillMemoryMb(1024); //consume approx 1gb
```

### Show logs

```javascript
const MemoryConsumer = require('memory-consumer');

const consumer = new MemoryConsumer(true);

consumer.fillMemoryMb(500); //consume approx 500mb
consumer.fillMemoryMb(1024); //consume approx 1gb
```

## Arguments
```
MemoryConsumer(Boolean logsEnabled, Integer logInterbalMs)
```

## Methods
#### fillMemoryMb(int):
consume number of MB.

#### enableLog():
just enable logs .

#### disableLog():
just disable logs.

#### setLogInterval(intervalMS):
set the iterval miliseconds for logs.

#### cleanMemory():
clean the memory storage. (it could take some time until the garbage collector really cleans the memory)