# Data Model

```javascript
{
    "User": {
        "id": int,
        "firstName": string,
        "lastName": string,
        "admin": bool
    },
    "Display": {
        "id": int,
        "name": string,
        "description": string,
        "customCSS": string
    },
    "Feed": {
        "id": int,
        "name": string,
        "description": string
    },
    "Portal": { // Belongs to: Display
        "id": int,
        "displayId": int, // Display FK
        "top": int,
        "left": int,
        "width": int,
        "height": int,
        "portalTypeId": int, // PortalType FK
        "transitionSpeed": int,
        "transitionTypeId": int // TransitionType FK
        "customCSS": string
    },
    "PortalType": {
        "id": int,
        "name": string // Fade | Slide | None
    },
    "TransitionType": {
        "id": int,
        "name": string // Text | Image | Video | Embed | Video
    },
    "Item": {
        "id": name,
        "name": string,
        "itemType": int // PortalType FK
        "feedId": int,
        "content": string
    }
}
```