---
_schema: default
title: Contact
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow: ''
    heading: Get in Touch
    subtext: >-
      [Placeholder — replace with contact intro text. Note: this form needs
      a submission endpoint wired up before launch — e.g. Netlify Forms,
      Formspree, or similar. It won't send anywhere yet.]
    buttonSections: []
    colorScheme: inherit
    backgroundColor: base
    paddingVertical: 2xl
  - _component: page-sections/builders/custom-section
    label: 'Contact form'
    contentSections:
      - _component: building-blocks/forms/form
        action: ''
        formBlocks:
          - _component: building-blocks/forms/input
            label: Name
            name: name
            type: text
            required: true
          - _component: building-blocks/forms/input
            label: Email
            name: email
            type: email
            required: true
          - _component: building-blocks/forms/textarea
            label: Message
            name: message
            required: true
          - _component: building-blocks/forms/submit
            text: Send Message
    maxContentWidth: sm
    paddingHorizontal: md
    paddingVertical: xl
    colorScheme: inherit
    backgroundColor: base
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
description: Contact Otago Polyfest.
---
