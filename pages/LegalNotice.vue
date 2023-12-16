<script lang="ts" setup>
import TimelineRow from "../components/TimelineRow.vue"

</script>

<template>
  <Container>
    <div
      id="legal" class="box"
    >
      <TimelineRow>
        <template #top-row><h2>LEGAL NOTICE</h2></template>
        <template #bottom-row>
          <p>according to § 5 TMG</p>
          <p>Kasia Bell (née Swiezak)<br>
            Meininger Str 12<br>
            10823 Berlin, Germany<br>
            +49 176 238 778 20<br>
            mail(at)kasiaswiezak.com
          </p>
          <p>Website development by <a id="ps-link" href="https://www.linkedin.com/in/philfreshman/">Philip Swiezak</a>
          </p>
        </template>
      </TimelineRow>

      <TimelineRow>
        <template #top-row><h2>CONTENT</h2></template>
        <template #bottom-row>
          <p>
            The author is not to be responsible for the topicality, correctness, completeness or quality of the
            information provided. Liability claims regarding damage caused by the use of any information provided,
            including any kind of information which is incomplete or incorrect, will therefore be rejected. All offers
            are
            non-binding and without obligation. Parts of the content or the complete publication including all offers
            and
            information might be extended, changed or deleted by the author without separate announcement.
          </p>
        </template>
      </TimelineRow>

      <TimelineRow>
        <template #top-row><h2>REFERRALS & LINKS</h2></template>
        <template #bottom-row>
          <p>
            This site contains links to third-party web sites on which the author has no influence on the content
            provided. Due to this the author accepts no warranty whatsoever particularly for its correctness nor as to
            the
            absence of any infringement of any proprietary rights of third parties. The content of such third-party
            sites
            is the responsibility of the respective owners or providers. At the time when third-party web sites have
            been
            linked these have been investigated for any likely contravention of the law. At the time of this
            investigation
            the author found no such violations. A permanent, continuous controlling of linked web sites is not
            reasonable
            without concrete indications of criminal actions. The author will promptly delete a link upon becoming aware
            that it violates the law.
          </p>
        </template>
      </TimelineRow>

      <TimelineRow>
        <template #top-row><h2>COPYRIGHT</h2></template>
        <template #bottom-row>
          <p>
            The author is intending not to use any copyrighted material without the prior consent of the copyright
            owner.
            In any case the author will indicate the copyright of the respective object. The copyright for any material
            created by the author is reserved. Any duplication or use of objects such as images, diagrams, sounds or
            texts
            in other electronic or printed publications is not permitted without the author’s prior consent.
          </p>
        </template>
      </TimelineRow>

      <TimelineRow>
        <template #top-row><h2>PRIVACY POLICY</h2></template>
        <template #bottom-row>
          <p>
            The use of this site is generally possible without any transmission of personal informations. If the
            opportunity for the input of personal or business data (email addresses, name, addresses) is given, the
            input
            of these data takes place voluntarily. Personal informations are not transmitted to third parties without
            the
            users explicit approval. The author will only retain personal information for as long as necessary for the
            fulfillment of the purposes it was collected for or until the user submits a request to delete its data. The
            use of published postal addresses, telephone or fax numbers and email addresses for marketing purposes is
            prohibited, offenders sending unwanted spam messages will be punished.
          </p>
        </template>
      </TimelineRow>

      <TimelineRow>
        <template #top-row><h2>LEGAL VALIDITY</h2></template>
        <template #bottom-row>
          <p>
            This disclaimer is to be regarded as part of the internet publication which you were referred from. If
            sections or individual terms of these legal terms are not legally correct, the content or validity of the
            other parts remain uninfluenced by this fact.
          </p>
        </template>
      </TimelineRow>

    </div>

  </Container>
</template>

<style lang="sass" scoped>
#legal
  padding-left: 100px
  width: 850px

#ps-link:hover
  text-decoration: underline
</style>
