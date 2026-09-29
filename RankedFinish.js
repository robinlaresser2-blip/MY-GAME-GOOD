// Return the authoritative stored profile until ranked result scoring is implemented.
// Repeated finish requests do not award duplicate points or invent match outcomes.
function rankedFinishResponse(ranked, updatedUser) {
  const points = ranked.currentRankPoints ?? 0;
  const rank = ranked.currentRankId ?? 1;
  const tier = ranked.currentTierIndex ?? 0;
  const position = ranked.currentLeaderboardPosition ?? 0;
  return {
    PreviousRankPoints: points, CurrentRankPoints: points,
    StandardRankPointsEarned: 0, SeasonBoostRankPointsEarned: 0, FriendBoostRankPointsEarned: 0,
    PreviousRankId: rank, CurrentRankId: rank,
    PreviousTierIndex: tier, CurrentTierIndex: tier,
    PreviousLeaderboardPosition: position, CurrentLeaderboardPosition: position,
    HasRankCeremonyPending: false, HasTierRewardsPending: false,
    UpdatedUser: updatedUser
  };
}
module.exports = rankedFinishResponse;
