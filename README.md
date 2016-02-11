# redis-leaderboards

#### API:
/api/:language/:window/:trending_modifier

where:
:window for monthly/weekly/daily, curr_week, prev_week
:base_modifier to increase denominator 
:exponent_modifier to increase dropoff of larger repos
:trending_modifier low | medium | high to adjust the trending window by increasing|decreasing the base_modifier and the exponent_modifier.