# Notification System Design
## Stage 6
Priority notifications are determined using two factors:

1. Notification Type Priority
   - Placement = Highest Priority
   - Result = Medium Priority
   - Event = Lowest Priority

2. Recency
   - Newer notifications are prioritized over older notifications within the same type.

Approach:
- Fetch notifications from the protected Notifications API.
- Assign weights to notification types.
- Sort notifications by type priority in descending order.
- For notifications of the same type, sort by timestamp in descending order.
- Select the top 10 notifications after sorting.

Complexity:
- Sorting: O(n log n)
- Selecting top 10: O(10)

For continuous incoming notifications, a Priority Queue (Max Heap) can be used to efficiently maintain the top 10 notifications without re-sorting the entire dataset.