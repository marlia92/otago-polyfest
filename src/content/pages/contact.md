---
_schema: default
title: Contact
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow: ''
    heading: Get in Touch
    subtext: "You can also reach us directly at admin@otagopolyfest.nz. Note: this
      form needs a submission endpoint wired up before launch — e.g. Netlify
      Forms, Formspree, or similar. It won't send anywhere yet."
    buttonSections: []
    colorScheme: inherit
    backgroundColor: base
    backgroundImage:
      source:
      alt: ''
      positionVertical: top
      positionHorizontal: center
    paddingVertical: 2xl
  - _component: page-sections/builders/custom-section
    label: Contact form
    contentSections:
      - _component: building-blocks/forms/form
        action: <input type="hidden" name="inbox_key"
          value="production-general-contact">
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
            variant: primary
            size: md
            iconPosition: before
            hideText: false
            disabled: false
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
  - _component: page-sections/ctas/cta-center
    heading: 'Support Otago Polyfest '
    subtext: >-
      We have been humbled by the requests for ways to support our festival
      \#ittakesavillage


      If you would like to make a koha please help us track and acknowledge your
      support, by using the following details for direct bank transfers:


      \*\*Account Name:\*\* Te Mana Ahua Ake Charitable Trust \*\*Account
      Number:\*\* 03-1727-0093417-00 \*\*Reference 1:\*\* DONATION \*\*Reference
      2:\*\* Your Name / Organisation Name


      If you require a receipt for tax purposes, please email
      \[admin@otagopolyfest.nz\](mailto:admin@otagopolyfest.nz) with the name
      used in the deposit reference, the exact amount deposited, and the date of
      the deposit.
    buttonSections: []
    colorScheme: contrast
    backgroundColor: base
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
description: Contact Otago Polyfest.
---
