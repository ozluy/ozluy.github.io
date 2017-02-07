<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xc="/xcommerce/1.0"  xmlns:p="/xcommerce/1.0/product"
                xmlns:c="/xcommerce/1.0/category">

  <xsl:output method="html" indent="yes"
              encoding="utf-8" media-type="text/xml" />

  <xsl:param name="name" />

  <xsl:template match="xc:products">

    <xsl:if test="$name">
      <!-- if this is a category page, show a title -->
      <h1>
        <xsl:value-of select="$name" />

        <!-- display count of how many products in this category -->
        (<xsl:value-of select="count(c:category[@c:name=$name]/p:product)"/>)
      </h1>
    </xsl:if>

    <ul>
      <xsl:attribute name="class">shelf</xsl:attribute>
      <!-- 
        allow for display of specific category, or if no category specified,
        just display ALL products
      -->
      <xsl:for-each select="c:category[@c:name=$name or not($name)]">
        <!-- render the products for each category, using product template -->
        <xsl:apply-templates select="p:product[not(@p:disabled)]" />
      </xsl:for-each>
    </ul>
  </xsl:template>

  <!-- Define shelf product template for easier extensibility in future. -->
  <xsl:template match="p:product">
    <li>
      <h2>
        <xsl:value-of select="p:name" />
      </h2>
      <a>
        <xsl:attribute name="href">
          product.html?id=<xsl:value-of select="@p:id" />
        </xsl:attribute>
        <img>
          <xsl:attribute name="alt">
            <xsl:value-of select="p:name" />
          </xsl:attribute>
          <xsl:attribute name="src">
            ../images/<xsl:value-of select="p:image" />
          </xsl:attribute>
        </img>
      </a>
      <p>
        £<xsl:value-of select="p:price" />
      </p>
    </li>
  </xsl:template>
</xsl:stylesheet>
