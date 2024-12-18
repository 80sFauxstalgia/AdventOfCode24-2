const fs = require('fs');

function isSafe(levels) {
    if (levels.length <= 1) return true;

    let increasing = levels[1] > levels[0];
    let decreasing = levels[1] < levels[0];

    for (let i = 1; i < levels.length; i++) {
        let diff = Math.abs(levels[i] - levels[i - 1]);
        if (diff < 1 || diff > 3) return false;

        if (levels[i] > levels[i - 1] && !increasing) return false;
        if (levels[i] < levels[i - 1] && !decreasing) return false;
    }

    return true;
}

function isSafeWithDampener(levels) {
    if (isSafe(levels)) return true;

    for (let i = 0; i < levels.length; i++) {
        let tempLevels = [...levels];
        tempLevels.splice(i, 1);
        if (isSafe(tempLevels)) return true;
    }

    return false;
}

function solvePuzzle(filename, part2 = false) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const reports = data.split('\n').filter(line => line.trim() !== '');

        let safeCount = 0;
        reports.forEach(report => {
            const levels = report.split(' ').map(Number);
            if (part2 ? isSafeWithDampener(levels) : isSafe(levels)) {
                safeCount++;
            }
        });

        return safeCount;
    } catch (err) {
        console.error("Error reading file:", err);
        return -1;
    }
}

// Part 1
let part1Result = solvePuzzle('puzzle2Input.text');
if(part1Result !== -1) {
    console.log("Part 1 Safe Reports:", part1Result);
}

// Part 2
let part2Result = solvePuzzle('puzzle2Input.text', true);
if(part2Result !== -1) {
    console.log("Part 2 Safe Reports:", part2Result);
}