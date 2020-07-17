const getSeason = month => {
  if (3 <= month && month <= 5) return 'Spring'
  if (6 <= month && month <= 8) return 'Summer'
  if (9 <= month && month <= 11) return 'Fall'
  return 'Winter' // 12, 1, 2
}

const getFullSeason = dt => `${getSeason(dt.getMonth())} ${dt.getFullYear()}`

const getCurrentSeason = () => getFullSeason(new Date())
export default getCurrentSeason
