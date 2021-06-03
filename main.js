'use strict';

class MemoryConsumer {
    constructor(logUsage = false, logIntervalMs = 2000) {
        this.logUsage = logUsage;
        this.logIntervalMs = logIntervalMs;
        this.init();
        this.memory = {};
    }

    init() {
        if(this.logUsage) {
            this.enableLog();
        }
    }
    
    enableLog() {
        this.interval = setInterval(() => {
            const used = this.getUsedMemory();
            process.stdout.write(`Memory used: ${used}.\n`);
        }, this.logIntervalMs);
    }

    getUsedMemory() {
        return this.bytesToSize(process.memoryUsage().heapUsed);
    }

    disableLog() {
        clearInterval(this.interval);
    }

    setLogInterval(intervalMs) {
        this.logIntervalMs = intervalMs;
    }

    bytesToSize(bytes) {
        const sizes = ['bytes', 'kb', 'mb', 'gb', 'tb'];
        if (bytes === 0) {
            return '0 Byte';
        }
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    }

    fillMemoryMb(mb = 1) {
        const index = new Date().getTime();
        for(let i = 0; i < mb; i++) {
            this.memory[index + i] = new Array(1024 * 1024 / 8); //aprox 1 mb
            this.memory[index + i].fill(1);
        }
    }

    cleanMemory() {
        this.memory = {};
    }
}

module.exports = MemoryConsumer;
