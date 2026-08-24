const PROJECT = "harbor-study-timer-haze";
const PROFILE = "0011";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
